module.exports = function(grunt) {

    // All settings are here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    //'js/libs/*.js', // Concat all files in directory
                    'js/SentenceModel.js',
                    'js/SentenceModelCollection.js',
                    'js/SentenceView.js',
                    'js/app.js'

                ],
                dest: 'js/build/production.js'
            }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        }

    });

    // Here we say Grunt, that we want to use this plagin
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Here are tasks we want Grunt to do
    grunt.registerTask('default', ['concat', 'uglify','imagemin']);

};