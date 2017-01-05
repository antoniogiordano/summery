/**
 * Created by AntonioGiordano on 26/07/16.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _MongoDAO = require('../Model/MongoDAO.js');

var _MongoDAO2 = _interopRequireDefault(_MongoDAO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var User = function () {
  _createClass(User, [{
    key: 'init',
    value: function init(params) {
      if (typeof params._id !== 'undefined') this._id = params._id;
      if (typeof params.username !== 'undefined') this.username = params.username;
      if (typeof params.email !== 'undefined') this.email = params.email;
      if (typeof params.password !== 'undefined') this.password = params.password;
    }
  }]);

  function User(params) {
    _classCallCheck(this, User);

    if (typeof params !== 'undefined') {
      this.init(params);
    }
  }

  _createClass(User, [{
    key: 'getByField',
    value: function getByField(field, value, db, cb) {
      var _this = this;

      var filter = {};
      filter[field] = value;
      _MongoDAO2.default.findOne(db, 'users', filter, function (err, user) {
        if (err) return cb(err);

        _this.init(user);
        return cb(null, user !== null);
      });
    }
  }, {
    key: 'getFromId',
    value: function getFromId(_id, db, cb) {
      var _this2 = this;

      _MongoDAO2.default.findOne(db, 'users', { _id: _id }, function (err, user) {
        if (err) return cb(err);

        if (user !== null) {
          _this2.init(user);
          cb(null, true);
        } else {
          cb(null, false);
        }
      });
    }
  }, {
    key: 'save',
    value: function save(db, cb) {
      if (typeof this._id === 'undefined') {
        _MongoDAO2.default.create(db, 'users', this, function (err) {
          cb(err);
        });
      } else {
        _MongoDAO2.default.update(db, 'users', { _id: this._id }, this, function (err) {
          cb(err);
        });
      }
    }
  }, {
    key: 'delete',
    value: function _delete(db, cb) {
      _MongoDAO2.default.deleteOne(db, 'users', { _id: this._id }, function (err) {
        cb(err);
      });
    }
  }]);

  return User;
}();

module.exports = User;