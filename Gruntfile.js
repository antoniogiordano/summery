'use strict'

module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-develop')

  grunt.initConfig({
    watch: {
      ejs: {
        files: 'src/**/**',
        filter: function (filepath) {
          return (filepath.substr(filepath.length - 3) === 'ejs' || filepath.substr(filepath.length - 3) === 'css' || filepath.substr(filepath.length - 4) === 'scss')
        },
        tasks: ['copy:ejs'],
        options: {
          spawn: true,
          events: 'all'
        }
      },
      serverFiles: {
        files: [
          'lib/**/**'
        ],
        tasks: ['develop'],
        options: {nospawn: true}
      }
    },
    copy: {
      ejs: {
        files: [
          {
            expand: true,
            cwd: 'src',
            src: '**',
            dest: 'lib/',
            filter: function (filepath) {
              return (filepath.substr(filepath.length - 3) === 'ejs' || filepath.substr(filepath.length - 3) === 'css' || filepath.substr(filepath.length - 4) === 'scss')
            }
          }
        ]
      }
    },
    develop: {
      server: {
        file: 'lib/server/server.js',
        args: ['--e=LOCALE']
      }
    }
  })

  grunt.registerTask('default', [
    'copy',
    'watch',
    'develop'
  ])
}
