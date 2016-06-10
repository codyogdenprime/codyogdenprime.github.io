module.exports = function(grunt) {

    // Config
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
			sass: { //SASS on main.scss
			    dist: {
			        options: {
			            style: 'compressed'
			        },
			        files: {
			            'src/css/compile.css': 'src/scss/style.scss'
			        }
			    } 
			},
            postcss: {
    options: {
      map: {
          inline: false, // save all sourcemaps as separate files...
      },
 
      processors: [
        require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes 
        //require('cssnano')() // minify the result 
      ]
    },
    dist: {
      src: 'src/css/compile.css',
      dest: 'style.css'
    }
  },
      uglify: {
        dist: {
          src: ['src/main.js'],
          dest: 'main.min.js',
        },
      },
      concat: {
        dist: {
          src: ['src/js/*.js'],
          dest: 'src/main.js',
        },
      },
			watch: {
				css: {
					files: ['src/scss/*.scss'],
					tasks: ['sass','postcss'],
					options: {
						spawn: false,
					},
                },
                js: {
					files: ['src/js/*.js'],
					tasks: ['concat','uglify'],
					options: {
						spawn: false,
					},
                },
            },
	    
    });

    // Create Grunt Tasks
	    grunt.loadNpmTasks('grunt-contrib-sass');
		grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-postcss');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-uglify');

    // Create Grunt commands
	    grunt.registerTask('default', ['sass','postcss','concat','uglify']);
		grunt.registerTask('dev', ['watch']);
};