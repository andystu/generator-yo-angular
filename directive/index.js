'use strict';
//var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YoAngularGenerator = yeoman.generators.Base.extend({
  promptTask: function () {
    this.log(chalk.magenta('This generator will generate a common directive for your app.'));

    var done = this.async();
    var prompts = [
      {
        type: 'input',
        name: 'directiveName',
        message: 'Your directive name'
      },
      {
        type: 'checkbox',
        name: 'restrictions',
        message: 'Which directive restrictions would you like to include?',
        choices: [
          {
            value: 'A',
            name: 'Attribute',
            checked: true
          }, {
            value: 'C',
            name: 'Class',
            checked: false
          }, {
            value: 'E',
            name: 'Element',
            checked: false
          }]
      }];

    this.prompt(prompts, function (props) {
      this.restrictions = "";
      var hasRestriction = function (mod) {
        return props.restrictions.indexOf(mod) !== -1;
      };
      this.restrictions += hasRestriction('A') ? 'A' : '';
      this.restrictions += hasRestriction('C') ? 'C' : '';
      this.restrictions += hasRestriction('E') ? 'E' : '';

      this.scriptDirectiveName = this._.camelize(this._.slugify(this._.humanize(props.directiveName)));
      done();
    }.bind(this));
  },
  app: function () {
    this.copy('_directive.js', 'assets/common/directives/' + this.scriptDirectiveName + '.js');
  }
});

module.exports = YoAngularGenerator;
