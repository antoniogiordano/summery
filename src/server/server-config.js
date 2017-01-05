/**
 * Created by AntonioGiordano on 27/05/16.
 */

'use strict'

module.exports.dbOpts = (env) => {
  switch (env) {
    case 'LOCALE':
      return {
        'url': 'mongodb://localhost:27017/summery',
        'settings': {
          'db': {
            'native_parser': false
          }
        }
      }
  }
}

module.exports.redisUrl = (env) => {
  switch (env) {
    case 'LOCALE':
      return { host: 'localhost', port: 6379 }
  }
}

module.exports.yarOpts = {
  storeBlank: false,
  cookieOptions: {
    password: 'whbg3287dugwbuyvcilqwdcjsbghy287idgwhuweidhu243we',
    isSecure: true
  }
}

module.exports.port = (env) => {
  switch (env) {
    case 'LOCALE':
      return 15293
  }
}

module.exports.dbTestOpts = {
  'url': 'mongodb://localhost:27017/summery_test',
  'settings': {
    'db': {
      'native_parser': false
    }
  }
}
