/*global module,require*/
module.exports = function (grunt) {
  'use strict';

  // configurable paths
  var projectConfig = {
    dist: 'apps/scanner/public',
    src: 'apps/scanner'
  };

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  try {
    projectConfig.src = require('./bower.json').appPath || projectConfig.src;
  } catch (e) {}

  grunt.initConfig({
    clean: {
      build: '<%= config.dist %>'
    },
    config: projectConfig,
    connect: {
      server: {
        options: {
          hostname: '0.0.0.0',
          livereload: true,
          base: [
            projectConfig.src,
            projectConfig.dist + '/tests'
          ],
          port: 9000
        }
      }
    },
    run: {
      options: {
      },
      bundleInstall: {
        cmd: 'bundle',
        args: [
          'install'
        ]
      }
    },
    concat: {
      js: {
        src: ['src/js/patternfly-settings.js', 'src/js/patternfly-functions.js'],
        dest: projectConfig.dist + '/js/patternfly.js'
      }
    },
    copy: {
      main: {
        files: [
          // copy Bootstrap font files
          {expand: true, cwd: 'node_modules/bootstrap/dist/fonts/', src: ['*'], dest: projectConfig.dist + '/fonts/'},
          // copy Font Awesome font files
          {expand: true, cwd: 'node_modules/font-awesome/fonts/', src: ['*'], dest: projectConfig.dist + '/fonts/'},
          // copy Patternfly less files
          {expand: true, cwd: 'src/less/', src: ['*'], dest: projectConfig.dist + '/less/'},
          // copy Patternfly font files
          {expand: true, cwd: 'src/fonts/', src: ['*'], dest: projectConfig.dist + '/fonts/'},
          //copy images
          {expand: true, cwd: 'src/img/', src: ['**'], dest: projectConfig.dist + '/img/'},
          // Dependencies
          // copy Bootstrap less files
          {expand: true, cwd: 'node_modules/bootstrap/less/', src: ['**'], dest: projectConfig.dist + '/less/dependencies/bootstrap/'},
          // copy Font Awesome less files
          {expand: true, cwd: 'node_modules/font-awesome/less/', src: ['**'], dest: projectConfig.dist + '/less/dependencies/font-awesome/'},
          // copy Bootstrap-Combobox less files
          {expand: true, cwd: 'node_modules/patternfly-bootstrap-combobox/less/', src: ['**'], dest: projectConfig.dist + '/less/dependencies/bootstrap-combobox/'},
          // copy Bootstrap-Datepicker less files
          {expand: true, cwd: 'node_modules/bootstrap-datepicker/less/', src: ['**'], dest: projectConfig.dist + '/less/dependencies/bootstrap-datepicker/'},
          // copy Bootstrap-Select less files
          {expand: true, cwd: 'node_modules/bootstrap-select/less/', src: ['**'], dest: projectConfig.dist + '/less/dependencies/bootstrap-select/'},
          // Bootstrap Switch less files must be manually copied because of edits made to source less for strict-math purposes
          // manually copy 'node_modules/bootstrap-switch/src/less/bootstrap3/' and make sure any math is wrapped with parentheses
          // copy Bootstrap Touchspin css file
          {expand: true, cwd: 'node_modules/bootstrap-touchspin/dist/', src: ['jquery.bootstrap-touchspin.css'], dest: projectConfig.dist + '/less/dependencies/bootstrap-touchspin/'},
          // copy C3 css file
          {expand: true, cwd: 'node_modules/c3/', src: ['c3.css'], dest: projectConfig.dist + '/less/dependencies/c3/'},
          // copy tests
          {expand: true, cwd: 'tests/', src: ['**'], dest: projectConfig.dist + '/tests/'}
        ]
      },
      js: {
        files: [
          // copy js src file
          {expand: true, cwd: 'src/js/', src: ['*.js'], dest: projectConfig.dist + '/js/'}
        ]
      }
    },
    csscount: {
      production: {
        src: [
          projectConfig.dist + '/css/patternfly*.min.css'
        ],
        options: {
          maxSelectors: 4096
        }
      }
    },
    jekyll: {
      options: {
        src: 'tests/pages',
        bundleExec: 'true'
      },
      tests: {
        options: {
          dest: projectConfig.dist + '/tests'
        }
      }
    },
    cssmin: {
      production: {
        files: [{
          expand: true,
          cwd: projectConfig.dist + '/css',
          src: ['patternfly*.css', '!*.min.css'],
          dest: projectConfig.dist + '/css',
          ext: '.min.css',
        }],
        options: {
          sourceMap: true
        }
      }
    },
    less: {
      patternfly: {
        files: {
          'apps/scanner/public/css/patternfly.css': 'src/less/patternfly.less',
        },
        options: {
          paths: [
            'src/less/',
            'node_modules/'
          ],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: projectConfig.dist + '/css/patternfly.css.map',
          sourceMapURL: 'patternfly.css.map'
        }
      },
      patternflyAdditions: {
        files: {
          'apps/scanner/public/css/patternfly-additions.css': 'src/less/patternfly-additions.less'
        },
        options: {
          paths: [
            'src/less/',
            'node_modules/'
          ],
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapFilename: projectConfig.dist + '/css/patternfly-additions.css.map',
          sourceMapURL: 'patternfly-additions.css.map'
        }
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      production: {
        files: {
          'apps/scanner/public/js/patternfly.min.js':           [projectConfig.dist + '/js/patternfly.js'],
          'apps/scanner/public/js/patternfly-settings.min.js':  [projectConfig.dist + '/js/patternfly-settings.js'],
          'apps/scanner/public/js/patternfly-functions.min.js': [projectConfig.dist + '/js/patternfly-functions.js'],
          'apps/scanner/public/js/patternfly.dataTables.pfEmpty.min.js':  ['src/js/patternfly.dataTables.pfEmpty.js'],
          'apps/scanner/public/js/patternfly.dataTables.pfFilter.min.js': ['src/js/patternfly.dataTables.pfFilter.js'],
          'apps/scanner/public/js/patternfly.dataTables.pfPagination.min.js': ['src/js/patternfly.dataTables.pfPagination.js'],
          'apps/scanner/public/js/patternfly.dataTables.pfResize.min.js': ['src/js/patternfly.dataTables.pfResize.js'],
          'apps/scanner/public/js/patternfly.dataTables.pfSelect.min.js': ['src/js/patternfly.dataTables.pfSelect.js']
        }
      }
    },
    watch: {
      copy: {
        files: [
          'node_modules/bootstrap/dist/fonts/**/*',
          'node_modules/font-awesome/fonts/**/*',
          'src/fonts/**/*',
          'src/img/**/*'
        ],
        tasks: ['copy']
      },
      jekyll: {
        files: 'tests/pages/**/*',
        tasks: ['jekyll']
      },
      less: {
        files: ['src/less/*.less'],
        tasks: ['less']
      },
      css: {
        files: [projectConfig.dist + '/css/patternfly*.css', projectConfig.dist + '/css/!*.min.css'],
        tasks: ['cssmin','csscount']
      },
      js: {
        files: ['src/js/*.js'],
        tasks: ['eslint', 'concat:js', 'copy:js', 'uglify']
      },
      livereload: {
        files: [projectConfig.dist + '/css/*.css', projectConfig.dist + '/js/*.js', projectConfig.dist + '/tests/*.html', '!tests/pages/*.html']
      },
      options: {
        livereload: true
      }
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    htmlhint: {
      html: {
        src: [projectConfig.dist + '/tests/**/*.html'],
        options: {
          htmlhintrc: '.htmlhintrc'
        }
      }
    },
    eslint: {
      options: {
        configFile: 'eslint.yaml'
      },
      target: [
        'Gruntfile.js',
        'src/js/**/*.js'
      ]
    },
    stylelint: {
      src: ['src/less/*.less']
    },
    postcss: {
      options: {
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: ['last 3 versions', 'ie 9']}) // add vendor prefixes,
        ]
      },
      dist: {
        files: [
          {
            expand: true,     // Enable dynamic expansion.
            cwd: projectConfig.dist + '/css/',      // Src matches are relative to this path.
            src: ['*.css'], // Actual pattern(s) to match.
            dest: projectConfig.dist + '/css'   // Destination path prefix.
          }
        ]
      }

    }
  });

  grunt.registerTask('build', [
    'run:bundleInstall',
    'concat',
    'copy',
    'jekyll',
    'less',
    'cssmin',
    'postcss',
    'csscount',
    'eslint',
    'uglify',
    'htmlhint',
    'stylelint'
  ]);

  grunt.registerTask('server', [
    'connect:server',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
