/**
 * Created by AntonioGiordano on 26/07/16.
 */

'use strict'

import DAO from '../Model/MongoDAO.js'

class User {
  init (params) {
    if (typeof params._id !== 'undefined') this._id = params._id
    if (typeof params.username !== 'undefined') this.username = params.username
    if (typeof params.email !== 'undefined') this.email = params.email
    if (typeof params.password !== 'undefined') this.password = params.password
  }

  constructor (params) {
    if (typeof params !== 'undefined') {
      this.init(params)
    }
  }

  getByField (field, value, db, cb) {
    var filter = {}
    filter[field] = value
    DAO.findOne(db, 'users', filter, (err, user) => {
      if (err) return cb(err)

      this.init(user)
      return cb(null, user !== null)
    })
  }

  getFromId (_id, db, cb) {
    DAO.findOne(db, 'users', {_id: _id}, (err, user) => {
      if (err) return cb(err)

      if (user !== null) {
        this.init(user)
        cb(null, true)
      } else {
        cb(null, false)
      }
    })
  }

  save (db, cb) {
    if (typeof this._id === 'undefined') {
      DAO.create(db, 'users', this, (err) => {
        cb(err)
      })
    } else {
      DAO.update(db, 'users', {_id: this._id}, this, (err) => {
        cb(err)
      })
    }
  }

  delete (db, cb) {
    DAO.deleteOne(db, 'users', {_id: this._id}, (err) => {
      cb(err)
    })
  }
}

module.exports = User
