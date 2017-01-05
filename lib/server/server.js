/**
 * Created by antoniogiordano on 04/01/17.
 */

'use strict';

var _hapi = require('hapi');

var _hapi2 = _interopRequireDefault(_hapi);

var _hapiMongodb = require('hapi-mongodb');

var _hapiMongodb2 = _interopRequireDefault(_hapiMongodb);

var _hapiAuthCookieRedis = require('hapi-auth-cookie-redis');

var _hapiAuthCookieRedis2 = _interopRequireDefault(_hapiAuthCookieRedis);

var _hapiInternalLog = require('./hapi-internal-log.js');

var _hapiInternalLog2 = _interopRequireDefault(_hapiInternalLog);

var _joi = require('joi');

var _joi2 = _interopRequireDefault(_joi);

var _minimist = require('minimist');

var _minimist2 = _interopRequireDefault(_minimist);

var _async = require('async');

var _async2 = _interopRequireDefault(_async);

var _inert = require('inert');

var _inert2 = _interopRequireDefault(_inert);

var _vision = require('vision');

var _vision2 = _interopRequireDefault(_vision);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serverConfig = require('./server-config.js');

var _serverConfig2 = _interopRequireDefault(_serverConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noop = function noop(err) {
  if (err) throw err;
};

var handleError = function handleError(err) {
  if (err) {
    console.log(err);
    throw err;
  }
};

var build = function build(opts, cb) {
  console.log(opts);
  var server = new _hapi2.default.Server({
    connections: {
      routes: {
        files: {
          relativeTo: _path2.default.join(__dirname, '../../public')
        }
      }
    }
  });
  cb = cb || noop;
  process.env.NODE_ENV = opts.env;
  server.connection({
    port: opts.port
  });

  _async2.default.series([function (cb) {
    // Register inert plugin to handle Static files (./public/*)
    server.register(_inert2.default, function (err) {
      if (err) cb(err);

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
      });
      cb(null, 'inert');
    });
  }, function (cb) {
    // Register EJS HTML rendering Plugin
    server.register(_vision2.default, function (err) {
      if (err) return cb(err);

      server.views({
        engines: { ejs: require('ejs') },
        relativeTo: __dirname,
        path: '../views'
      });
      cb(null, 'vision');
    });
  }, function (cb) {
    // Hapi Session Redis
    server.register(_hapiAuthCookieRedis2.default, function (err) {
      if (err) return cb(err, 'HapiAuthCookieRedis');

      server.auth.strategy('session', 'redis', {
        host: opts.redisUrl.host,
        port: opts.redisUrl.port,
        ttl: 30 * 24 * 3600,
        param: 'auth'
      });

      console.log('Hapi Auth Cookie Redis loaded');
      cb(null);
    });
  }, function (cb) {
    // Hapi MongoDB plugin
    server.register({
      register: _hapiMongodb2.default,
      options: opts.dbOpts
    }, function (err) {
      if (err) return cb(err, 'mongo');

      console.log('MongoDB loaded');
      cb(null);
    });
  }, function (cb) {
    // Hapi Socket IO plugin
    server.register(_hapiInternalLog2.default, function (err) {
      console.log('HapiLog loaded');
      cb(err, 'log');
    });
  }], function (err) {
    if (err) return handleError(err);

    // App API
    server.route(require('../app/User/actions.js'));

    cb(null, server);
  });

  return server;
};

module.exports = build;

var start = function start(opts, cb) {
  opts.dbOpts = _serverConfig2.default.dbOpts(opts.env);
  opts.port = _serverConfig2.default.port(opts.env);
  opts.redisUrl = _serverConfig2.default.redisUrl(opts.env);
  opts.yarOpts = _serverConfig2.default.yarOpts;
  build(opts, function (err, server) {
    if (err) return cb(err);
    server.start(function (err) {
      cb(err, server);
    });
  });
};

module.exports.start = start;

if (require.main === module) {
  var opts = (0, _minimist2.default)(process.argv.slice(2), {
    integer: ['port'],
    alias: {
      port: 'p',
      env: 'e',
      mediaPath: 'm'
    },
    default: {
      port: _serverConfig2.default.serverDefaultPort
    }
  });
  _joi2.default.validate(opts, _joi2.default.object().keys({
    env: _joi2.default.string().valid(['LOCALE', 'STAGE', 'TEST_STAGE', 'PRODUCTION']).required(),
    mediaPath: _joi2.default.string().allow([null, '']).optional()
  }), {
    allowUnknown: true
  }, function (err, opts) {
    if (err) throw err;
    start(opts, function (err, server) {
      handleError(err);

      console.log('Server running at:', server.info.uri + ' in ' + opts.env + ' mode');
    });
  });
} else {
  console.log('Running in test mode');
}