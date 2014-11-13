'use strict';
//var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YoAngularGenerator = yeoman.generators.Base.extend({
  promptTask: function () {
    this.log(chalk.magenta('This generator will generate a common service for your app.'));

    var done = this.async();
    var prompts = [
      {
        type: 'input',
        name: 'serviceName',
        message: 'Your service name'
      }];

    this.prompt(prompts, function (props) {
      this.scriptServiceName = this._.camelize(this._.slugify(this._.humanize(props.serviceName)));
      done();
    }.bind(this));
  },
  app: function () {
    this.copy('_service.js', 'assets/common/services/' + this.scriptServiceName + 'Service.js');
  }
});

module.exports = YoAngularGenerator;
