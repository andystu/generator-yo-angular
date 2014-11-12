'use strict';
//var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var YoAngularGenerator = yeoman.generators.Base.extend({
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    yeoman.Base.apply(this, arguments);
    this.argument('name', { type: String, required: false });
    this.name = this.name || path.basename(process.cwd());
    this.name = this._.camelize(this._.slugify(this._.humanize(this.name)));
    this.scriptCtrlName = this.name;
  },

  askFor: function () {
    var done = this.async();

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('This generator will generate a controller for your app.'));

    var prompts = [];

    this.prompt(prompts, function (props) {
      this.name = props.name;

      done();
    }.bind(this));
  },

  app: function () {

    this.mkdir('assets/app/'+this.scriptCtrlName);
    this.copy('_controller.js', 'assets/app/'+this.scriptCtrlName+'/'+this.scriptCtrlName+'Ctrl.js');
    this.copy('_content.html', 'assets/app/'+this.scriptCtrlName+'/'+'content.html');
  }
});

module.exports = YoAngularGenerator;
