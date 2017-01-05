/**
 * Created by AntonioGiordano on 20/09/16.
 */

'use strict'

const moment = require('moment')
const DAO = require('../Model/MongoDAO.js')

class Log {
  init (params) {
    if (typeof params._id !== 'undefined') this._id = params._id
    if (typeof params.realm !== 'undefined') this.realm = params.realm
    if (typeof params.result !== 'undefined') this.result = params.result
    if (typeof params.message !== 'undefined') this.message = params.message
    if (typeof params.params !== 'undefined') this.params = params.params
    if (typeof params.created !== 'undefined') this.created = params.created
  }

  constructor (params) {
    if (typeof params !== 'undefined') {
      this.init(params)
    }
  }

  save (db, cb) {
    if (typeof this._id === 'undefined') {
      this.created = moment().toISOString()
      DAO.create(db, 'logs', this, (err) => {
        cb(err)
      })
    } else {
      DAO.update(db, 'logs', {_id: this._id}, this, (err) => {
        cb(err)
      })
    }
  }
}

module.exports = Log
