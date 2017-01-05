'use strict';

var _Log = require('../app/Log/Log.js');

var _Log2 = _interopRequireDefault(_Log);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db; /**
         * Created by AntonioGiordano on 17/06/16.
         */

var log = function log(realm, result, message, params) {
  switch (process.env.NODE_ENV) {
    case 'PRODUCTION':
      console.log(realm + ' | ' + result + ' - ' + message);
      var log = new _Log2.default({
        realm: realm, result: result, message: message, params: params
      });
      log.save(db, function () {
        return null;
      });
      break;
    default:
      console.log(realm + ' | ' + result + ' - ' + message);
      var l = new _Log2.default({
        realm: realm, result: result, message: message, params: params
      });
      l.save(db, function () {
        return null;
      });
      break;
  }
};

exports.register = function (server, options, next) {
  db = server.plugins['hapi-mongodb'].db;

  var expose = {
    log: log
  };

  if (options.decorate) {
    server.decorate('server', 'hapi-log', expose);
    server.decorate('request', 'hapi-log', expose);
  } else {
    Object.keys(expose).forEach(function (key) {
      server.expose(key, expose[key]);
    });
  }

  next();
};

exports.register.attributes = {
  name: 'hapi-log',
  version: '0.0.1'
};