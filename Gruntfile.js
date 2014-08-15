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
        },
        less:{
            compile: {
                options: {
                    //paths: ['test/fixtures/include']
                },
                files: {
                    'css/style.css': 'less/style.less'
                    //'tmp/less.css': ['test/fixtures/style.less'],
                   // 'tmp/concat.css': ['test/fixtures/style.less', 'test/fixtures/style2.less', 'test/fixtures/style3.less']
                }
            }
        }
    });

    // Here we say Grunt, that we want to use this plagin
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Here are tasks we want Grunt to do
    grunt.registerTask('default', ['imagemin','less', 'uglify','concat']);

};