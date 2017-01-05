/**
 * Created by AntonioGiordano on 20/09/16.
 */

'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var moment = require('moment');
var DAO = require('../Model/MongoDAO.js');

var Log = function () {
  _createClass(Log, [{
    key: 'init',
    value: function init(params) {
      if (typeof params._id !== 'undefined') this._id = params._id;
      if (typeof params.realm !== 'undefined') this.realm = params.realm;
      if (typeof params.result !== 'undefined') this.result = params.result;
      if (typeof params.message !== 'undefined') this.message = params.message;
      if (typeof params.params !== 'undefined') this.params = params.params;
      if (typeof params.created !== 'undefined') this.created = params.created;
    }
  }]);

  function Log(params) {
    _classCallCheck(this, Log);

    if (typeof params !== 'undefined') {
      this.init(params);
    }
  }

  _createClass(Log, [{
    key: 'save',
    value: function save(db, cb) {
      if (typeof this._id === 'undefined') {
        this.created = moment().toISOString();
        DAO.create(db, 'logs', this, function (err) {
          cb(err);
        });
      } else {
        DAO.update(db, 'logs', { _id: this._id }, this, function (err) {
          cb(err);
        });
      }
    }
  }]);

  return Log;
}();

module.exports = Log;