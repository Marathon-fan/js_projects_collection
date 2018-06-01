module.exports = function(grunt) {

    // configure main project settings  
    grunt.initConfig({
        // basic settings and info about plugins  
        pkg: grunt.file.readJSON('package.json'),

        // name of the plugin(plugin name without the "grunt-conrib-")
        cssmin: {  // task name
            combine: {
                files: {
                    'html/css/main.css':['html/css/content.css', 'html/css/sidebar.css']
                }
            }
        },

        // uglify
        uglify: { // task name
            dist: {
                files: {
                    'html/js/toggle.min.js':['html/js/toggle.js']
                }
            }
        } 

    });

    // load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // do the task
    grunt.registerTask('default', ['cssmin', 'uglify']);


};