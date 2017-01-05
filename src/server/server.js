/**
 * Created by antoniogiordano on 04/01/17.
 */

'use strict'

import Hapi from 'hapi'
import HapiMongoDB from 'hapi-mongodb'
import HapiAuthCookieRedis from 'hapi-auth-cookie-redis'
import HapiLog from './hapi-internal-log.js'
import Joi from 'joi'
import minimist from 'minimist'
import async from 'async'
import Inert from 'inert'
import Vision from 'vision'
import path from 'path'
import config from './server-config.js'

const noop = (err) => {
  if (err) throw err
}

const handleError = (err) => {
  if (err) {
    console.log(err)
    throw err
  }
}

const build = (opts, cb) => {
  console.log(opts)
  const server = new Hapi.Server({
    connections: {
      routes: {
        files: {
          relativeTo: path.join(__dirname, '../../public')
        }
      }
    }
  })
  cb = cb || noop
  process.env.NODE_ENV = opts.env
  server.connection({
    port: opts.port
  })

  async.series([
    (cb) => {
      // Register inert plugin to handle Static files (./public/*)
      server.register(Inert, (err) => {
        if (err) cb(err)

        server.route({
          method: 'GET',
          path: '/{param*}',
          handler: {
            directory: {
              path: '.',
              redirectToSlash: false,
              index: true
            }
          }
        })
        cb(null, 'inert')
      })
    },
    (cb) => {
      // Register EJS HTML rendering Plugin
      server.register(Vision, (err) => {
        if (err) return cb(err)

        server.views({
          engines: {ejs: require('ejs')},
          relativeTo: __dirname,
          path: '../views'
        })
        cb(null, 'vision')
      })
    },
    (cb) => {
      // Hapi Session Redis
      server.register(HapiAuthCookieRedis, (err) => {
        if (err) return cb(err, 'HapiAuthCookieRedis')

        server.auth.strategy('session', 'redis', {
          host: opts.redisUrl.host,
          port: opts.redisUrl.port,
          ttl: 30 * 24 * 3600,
          param: 'auth'
        })

        console.log('Hapi Auth Cookie Redis loaded')
        cb(null)
      })
    },
    (cb) => {
      // Hapi MongoDB plugin
      server.register({
        register: HapiMongoDB,
        options: opts.dbOpts
      }, (err) => {
        if (err) return cb(err, 'mongo')

        console.log('MongoDB loaded')
        cb(null)
      })
    },
    (cb) => {
      // Hapi Socket IO plugin
      server.register(HapiLog, (err) => {
        console.log('HapiLog loaded')
        cb(err, 'log')
      })
    }
  ], (err) => {
    if (err) return handleError(err)

    // App API
    server.route(require('../app/User/actions.js'))

    cb(null, server)
  })

  return server
}

module.exports = build

const start = (opts, cb) => {
  opts.dbOpts = config.dbOpts(opts.env)
  opts.port = config.port(opts.env)
  opts.redisUrl = config.redisUrl(opts.env)
  opts.yarOpts = config.yarOpts
  build(opts, (err, server) => {
    if (err) return cb(err)
    server.start((err) => {
      cb(err, server)
    })
  })
}

module.exports.start = start

if (require.main === module) {
  var opts = minimist(process.argv.slice(2), {
    integer: ['port'],
    alias: {
      port: 'p',
      env: 'e',
      mediaPath: 'm'
    },
    default: {
      port: config.serverDefaultPort
    }
  })
  Joi.validate(opts, Joi.object().keys({
    env: Joi.string().valid(['LOCALE', 'STAGE', 'TEST_STAGE', 'PRODUCTION']).required(),
    mediaPath: Joi.string().allow([null, '']).optional()
  }), {
    allowUnknown: true
  }, (err, opts) => {
    if (err) throw err
    start((opts), (err, server) => {
      handleError(err)

      console.log('Server running at:', server.info.uri + ' in ' + opts.env + ' mode')
    })
  })
} else {
  console.log('Running in test mode')
}
