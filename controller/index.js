'use strict';
//var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YoAngularGenerator = yeoman.generators.Base.extend({
  promptTask: function () {
    this.log(chalk.magenta('This generator will generate a common controller for your app.'));

    var done = this.async();
    var prompts = [
      {
        type: 'input',
        name: 'controllerName',
        message: 'Your controller name'
      }];

    this.prompt(prompts, function (props) {
      this.scriptCtrlName = this._.camelize(this._.slugify(this._.humanize(props.controllerName)));
      done();
    }.bind(this));
  },
  app: function () {
    this.copy('_controller.js', 'assets/common/controllers/' + this.scriptCtrlName + 'Ctrl.js');
  }
});

module.exports = YoAngularGenerator;
