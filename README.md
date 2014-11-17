This is a yeoman generator for an angularjs project.

It takes advantage of the gulp build tool and makes use of bower and npm for dependency management.

-----

#### GENERATED DIRECTORY STRUCTURE ####

    assets/
      app/
        main/
          content.html
          mainCtrl.js
        app.js
        initializer.js
        route.js
      common/
        controllers/
          headerCtrl.js
          directives/
        layout/
          footer.html
          header.html
          layout.html
        models/
        partials/
        services/
      css/
        includes/
          _main.scss
        app.scss
      images/
      vendor/
      index.html
    bower_components/    
    node_modules/
    .bowerrc
    .editorconfig
    .gitignore
    .jshintrc
    bower.json
    gulpfile.js
    package.json

-----

#### FEATURES ####
- follows the project structure for [angular seed][1]
- using 'gulp' command to develop app in development environment
- using 'gulp production' command to release app in production environment
- after run 'gulp production' command, all app files are compiled into release folder
- a static server is run at port 3000 with livereload support

-----

#### Prerequisites ####
- node.js [http://nodejs.org/][2]
- npm [http://www.npmjs.org/][3]
- bower [http://bower.io/][4]
- gulp.js [http://gulpjs.com/][5]

-----

#### USAGE ####
1) npm install -g generator-yo-angular

2) mkdir myApp && cd myApp && yo yo-angular

3) gulp

6) start developing

----

#### Support ####
For questions and issues: [https://github.com/bob76828/generator-yo-angular/issues][7]


  [1]: https://github.com/angular/angular-seed
  [2]: http://nodejs.org/
  [3]: http://www.npmjs.org/
  [4]: http://bower.io/
  [5]: http://gulpjs.com/
  [7]: https://github.com/henyojess/generator-gulp-ng/issues
