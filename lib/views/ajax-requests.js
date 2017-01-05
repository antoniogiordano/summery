'use strict';

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* const handleAJAXError = (err, cb) => {
  switch (err.status) {
    case 401:
      window.location.href = '/login'
      break
    default:
      alert(err.message)
      cb(err)
      break
  }
} */

module.exports = {
  registration: function registration(data, cb) {
    _axios2.default.post('/registrate.json', data, {
      withCredentials: true
    }).then(function (response) {
      cb(null, response.data);
    }).catch(function (err) {
      cb(err);
    });
  },
  isLogged: function isLogged(cb) {
    _axios2.default.get('/isLogged.json', {
      withCredentials: true
    }).then(function (response) {
      cb(null, response.data);
    }).catch(function (err) {
      cb(err);
    });
  },
  login: function login(data, cb) {
    _axios2.default.post('/login.json', data, {
      withCredentials: true
    }).then(function (response) {
      cb(null, response.data);
    }).catch(function (err) {
      cb(err);
    });
  },
  logout: function logout(cb) {
    _axios2.default.get('/logout.json', {
      withCredentials: true
    }).then(function (response) {
      cb(null, response.data);
    }).catch(function (err) {
      cb(err);
    });
  }
}; /**
    * Created by AntonioGiordano on 07/10/16.
    */