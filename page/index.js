'use strict';
//var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YoAngularGenerator = yeoman.generators.Base.extend({
  promptTask: function () {
    this.log(chalk.magenta('This generator will generate a common page for your app.'));

    var done = this.async();
    var prompts = [
      {
        type: 'input',
        name: 'pageName',
        message: 'Your page name'
      }];

    this.prompt(prompts, function (props) {
      this.scriptPageName = this._.camelize(this._.slugify(this._.humanize(props.pageName)));
      done();
    }.bind(this));
  },
  app: function () {
    this.mkdir('assets/app/'+this.scriptPageName);
    this.copy('_controller.js', 'assets/app/'+this.scriptPageName+'/'+this.scriptPageName+'Ctrl.js');
    this.copy('_content.html', 'assets/app/'+this.scriptPageName+'/'+'content.html');
  }
});

module.exports = YoAngularGenerator;
