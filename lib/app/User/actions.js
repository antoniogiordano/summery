'use strict';

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _boom = require('boom');

var _boom2 = _interopRequireDefault(_boom);

var _bcrypt = require('bcrypt');

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _user = require('./user.js');

var _user2 = _interopRequireDefault(_user);

var _shared = require('./shared.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isLogged = function isLogged(req, reply) {
  if (req.auth.isAuthenticated) {
    return reply({
      result: 1
    });
  } else {
    return reply({
      result: 0
    });
  }
}; /**
    * Created by antoniogiordano on 05/01/17.
    */

var registrate = function registrate(req, reply) {
  var log = req.server.plugins['hapi-log'].log;
  _joi2.default.validate(req.payload, _shared.registrationValidation, function (err, userData) {
    if (err) return reply(_boom2.default.badRequest(err.details[0].message));

    var user = new _user2.default();
    var db = req.server.plugins['hapi-mongodb'].db;
    user.getByField('username', userData.username, db, function (err, exists) {
      if (err) return reply(_boom2.default.badImplementation(err.message));
      if (exists) return reply(_boom2.default.badRequest('This username is already taken'));

      user.getByField('email', userData.email, db, function (err, exists) {
        if (err) return reply(_boom2.default.badImplementation(err.message));
        if (exists) return reply(_boom2.default.badRequest('This email is already taken'));

        _bcrypt2.default.hash(userData.password, 10, function (err, hash) {
          if (err) return reply(_boom2.default.badImplementation(err.message));

          user = new _user2.default({
            email: userData.email,
            username: userData.username,
            password: hash
          });
          user.save(db, function (err) {
            if (err) return reply(_boom2.default.badImplementation(err.message));

            log('API', 'SUCCESS', 'User registered!' + user.username);

            return reply({ result: 1 });
          });
        });
      });
    });
  });
};

var login = function login(req, reply) {
  _joi2.default.validate(req.payload, _shared.loginValidation, function (err, credentials) {
    if (err) return reply(_boom2.default.badRequest(err.details[0].message));

    var db = req.server.plugins['hapi-mongodb'].db;
    var user = new _user2.default();
    user.getByField('username', credentials.username, db, function (err, exists) {
      if (err) return reply(_boom2.default.badImplementation(err.message));
      if (!exists) return reply(_boom2.default.badData('Account not found!'));

      _bcrypt2.default.compare(credentials.password, user.password, function (err, isValid) {
        if (err) return reply(_boom2.default.badImplementation(err.message));
        if (!isValid) return reply(_boom2.default.badData('Wrong credentials!'));

        req.auth.redis.set(user).then(function () {
          reply({ result: 1 });
        }).catch(function (err) {
          return reply(_boom2.default.badImplementation(err.message));
        });
      });
    });
  });
};

module.exports = [
// user SIGNUP PAGE
{
  method: 'GET',
  path: '/signup',
  config: {
    handler: function handler(req, reply) {
      var props = {};
      reply.view('Users/registration/registration.ejs', {
        props: JSON.stringify(props)
      });
    }
  }
},
// user SIGNIN PAGE
{
  method: 'GET',
  path: '/signin',
  config: {
    handler: function handler(req, reply) {
      var props = {};
      reply.view('Users/login/login.ejs', {
        props: JSON.stringify(props)
      });
    }
  }
},
// user DASHBOARD PAGE
{
  method: 'GET',
  path: '/dashboard',
  config: {
    handler: function handler(req, reply) {
      var props = {};
      reply.view('Users/dashboard/dashboard.ejs', {
        props: JSON.stringify(props)
      });
    }
  }
},
// user IS LOGGED FLAG ACTION
{
  method: 'GET',
  path: '/isLogged.json',
  config: {
    auth: {
      strategies: ['session'],
      mode: 'try'
    },
    handler: isLogged
  }
},
// user REGISTRATION ACTION
{
  method: 'POST',
  path: '/registrate.json',
  config: {
    handler: registrate
  }
},
// user LOGIN ACTION
{
  method: 'POST',
  path: '/login.json',
  config: {
    handler: login
  }
}];