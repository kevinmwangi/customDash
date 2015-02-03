module.exports = function(grunt){
    
    
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
        options: {
            jshintrc: '.jshintrc'
        },
        all: [ '*.js', 'src/js/**/*.js' ]
    },
    watch: {
        sass: {
            files: [ 'config.json', 'src/sass/**/*.scss', 'src/widget/**/*.scss' ],
            tasks: [ 'style' ],
            options: {
                spawn: false
            }
        },
        js: {
            files: [ '*.js', 'src/**/*.js' ],
            tasks: [ 'modernizr' ],
            options: {
                spawn: false
            }
        }
    },
    modernizr: {
        dist: {
            "devFile": "remote",
            "outputFile": "lib/Modernizr.js",
            "extra": {
                "shiv": false,
                "printshiv": true,
                "load": false,
                "mq": false,
                "cssclasses": true
            },
            "uglify": false,
            "parseFiles": true
        }
    }
});  
    
// Load tasks
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks("grunt-modernizr");

// Register tasks
grunt.registerTask( 'default', [ 'modernizr', 'jshint' ] );
};