'use strict';
//var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YoAngularGenerator = yeoman.generators.Base.extend({
  promptTask: function () {
    this.log(chalk.magenta('This generator will generate a common model for your app.'));

    var done = this.async();
    var prompts = [
      {
        type: 'input',
        name: 'modelName',
        message: 'Your model name'
      }];

    this.prompt(prompts, function (props) {
      this.scriptModelName = this._.camelize(this._.slugify(this._.humanize(props.modelName)));
      done();
    }.bind(this));
  },
  app: function () {
    this.copy('_model.js', 'assets/common/models/' + this.scriptModelName + 'Model.js');
  }
});

module.exports = YoAngularGenerator;
