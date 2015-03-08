module.exports = function (grunt) {
  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  var config = {
    ts: {
      maths: {
        src: ["public/ts/**/*.ts", "!typings/**/*.*"],
        html: ["public/ts/**/*.tpl.html"],
        reference: "public/ts/reference.ts",
        out: "public/js/maths.js",
        options: { noImplicitAny: true }
      }
    },

    watch: {
      maths: {
        files: ["public/ts/**/*.ts"],
        tasks: ['ts:maths'],
        options: { spawn: false }
      }
    }
  };

  grunt.initConfig(config);
  grunt.registerTask("default", "watch:maths");
};