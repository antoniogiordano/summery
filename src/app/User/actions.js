/**
 * Created by antoniogiordano on 05/01/17.
 */

import Joi from 'joi'
import Boom from 'boom'
import Bcrypt from 'bcrypt'
import User from './user.js'
import {loginValidation, registrationValidation} from './shared.js'

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
    user.getByField('username', userData.username, db, (err, exists) => {
      if (err) return reply(Boom.badImplementation(err.message))
      if (exists) return reply(Boom.badRequest('This username is already taken'))

      user.getByField('email', userData.email, db, (err, exists) => {
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

const login = (req, reply) => {
  Joi.validate(req.payload, loginValidation, (err, credentials) => {
    if (err) return reply(Boom.badRequest(err.details[0].message))

    var db = req.server.plugins['hapi-mongodb'].db
    var user = new User()
    user.getByField('username', credentials.username, db, (err, exists) => {
      if (err) return reply(Boom.badImplementation(err.message))
      if (!exists) return reply(Boom.badData('Account not found!'))

      Bcrypt.compare(credentials.password, user.password, (err, isValid) => {
        if (err) return reply(Boom.badImplementation(err.message))
        if (!isValid) return reply(Boom.badData('Wrong credentials!'))

        req.auth.redis.set(user).then(() => {
          reply({result: 1})
        }).catch((err) => {
          return reply(Boom.badImplementation(err.message))
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
  // user SIGNIN PAGE
  {
    method: 'GET',
    path: '/signin',
    config: {
      handler: (req, reply) => {
        var props = {}
        reply.view('Users/login/login.ejs', {
          props: JSON.stringify(props)
        })
      }
    }
  },
  // user DASHBOARD PAGE
  {
    method: 'GET',
    path: '/dashboard',
    config: {
      handler: (req, reply) => {
        var props = {}
        reply.view('Users/dashboard/dashboard.ejs', {
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
  },
  // user LOGIN ACTION
  {
    method: 'POST',
    path: '/login.json',
    config: {
      handler: login
    }
  }
]
