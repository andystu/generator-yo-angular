'use strict';
//var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YoAngularGenerator = yeoman.generators.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: false });
    this.appname = this.appname || path.basename(process.cwd());
    this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
    this.scriptAppName = this.appname;
  },

  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('This generator will generate a web app project using gulp, bower and angularJS.'));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  app: function () {

    this.mkdir('assets');
    this.copy('assets/_index.html', 'assets/index.html');

    this.mkdir('assets/app');
    this.copy('assets/app/_app.js', 'assets/app/app.js');
    this.copy('assets/app/_initializer.js', 'assets/app/initializer.js');
    this.copy('assets/app/_route.js', 'assets/app/route.js');

    this.mkdir('assets/app/main');
    this.copy('assets/app/main/_content.html', 'assets/app/main/content.html');
    this.copy('assets/app/main/_mainCtrl.js', 'assets/app/main/mainCtrl.js');

    this.mkdir('assets/common');
    this.mkdir('assets/common/controllers');
    this.copy('assets/common/controllers/_readMe.txt', 'assets/common/controllers/readMe.txt');
    this.copy('assets/common/controllers/_headerCtrl.js', 'assets/common/controllers/headerCtrl.js');

    this.mkdir('assets/common/directives');
    this.copy('assets/common/directives/_readMe.txt', 'assets/common/directives/readMe.txt');

    this.mkdir('assets/common/layout');
    this.copy('assets/common/layout/_layout.html', 'assets/common/layout/layout.html');
    this.copy('assets/common/layout/_footer.html', 'assets/common/layout/footer.html');
    this.copy('assets/common/layout/_header.html', 'assets/common/layout/header.html');


    this.mkdir('assets/common/models');
    this.copy('assets/common/models/_readMe.txt', 'assets/common/models/readMe.txt');

    this.mkdir('assets/common/partials');
    this.copy('assets/common/partials/_readMe.txt', 'assets/common/partials/readMe.txt');

    this.mkdir('assets/common/services');
    this.copy('assets/common/services/_readMe.txt', 'assets/common/services/readMe.txt');

    this.mkdir('assets/css');
    this.copy('assets/css/_app.scss', 'assets/css/app.scss');

    this.mkdir('assets/css/includes');
    this.copy('assets/css/includes/_main.scss', 'assets/css/includes/_main.scss');

    this.mkdir('assets/images');
    this.copy('assets/images/_readMe.txt', 'assets/images/readMe.txt');

    this.mkdir('assets/vendor');
    this.mkdir('assets/vendor/css');
    this.copy('assets/vendor/css/_readMe.txt', 'assets/vendor/css/readMe.txt');

    this.mkdir('assets/vendor/js');
    this.copy('assets/vendor/js/_readMe.txt', 'assets/vendor/js/readMe.txt');

    this.mkdir('gulp_tasks');
    this.copy('gulp_tasks/_deploy.js', 'gulp_tasks/deploy.js');
    this.copy('gulp_tasks/_development.js', 'gulp_tasks/development.js');
    this.copy('gulp_tasks/_jshint.js', 'gulp_tasks/jshint.js');
    this.copy('gulp_tasks/_production.js', 'gulp_tasks/production.js');
  },

  projectfiles: function () {
    this.copy('_.gitignore', '.gitignore');
    this.copy('_.jshintrc', '.jshintrc');
    this.copy('_bower.json', 'bower.json');
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_gulpfile.js', 'gulpfile.js');
    this.copy('_package.json', 'package.json');
  }
});

module.exports = YoAngularGenerator;
