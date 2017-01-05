/**
 * Created by antoniogiordano on 05/01/17.
 */

import Joi from 'joi'
import Boom from 'boom'
import Bcrypt from 'bcrypt'
import User from './user.js'
import {registrationValidation} from './shared.js'

const isLogged = (req, reply) => {
  if (req.auth.isAuthenticated) {
    return reply({
      result: 1
    })
  } else {
    return reply({
      result: 0
    })
  }
}

const registrate = (req, reply) => {
  var log = req.server.plugins['hapi-log'].log
  Joi.validate(req.payload, registrationValidation, (err, userData) => {
    if (err) return reply(Boom.badRequest(err.details[0].message))

    var user = new User()
    var db = req.server.plugins['hapi-mongodb'].db
    user.existByField('username', userData.username, db, (err, exists) => {
      if (err) return reply(Boom.badImplementation(err.message))
      if (exists) return reply(Boom.badRequest('This username is already taken'))

      user.existByField('email', userData.email, db, (err, exists) => {
        if (err) return reply(Boom.badImplementation(err.message))
        if (exists) return reply(Boom.badRequest('This email is already taken'))

        Bcrypt.hash(userData.password, 10, (err, hash) => {
          if (err) return reply(Boom.badImplementation(err.message))

          user = new User({
            email: userData.email,
            username: userData.username,
            password: hash
          })
          user.save(db, (err) => {
            if (err) return reply(Boom.badImplementation(err.message))

            log('API', 'SUCCESS', 'User registered!' + user.username)

            return reply({result: 1})
          })
        })
      })
    })
  })
}

module.exports = [
  // user SIGNUP PAGE
  {
    method: 'GET',
    path: '/signup',
    config: {
      handler: (req, reply) => {
        var props = {}
        reply.view('Users/registration/registration.ejs', {
          props: JSON.stringify(props)
        })
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
  }
]
