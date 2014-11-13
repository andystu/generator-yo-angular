"use strict";

angular.module('ng.directive').directive('<%= scriptDirectiveName %>', [function () {
  return {
    restrict: '<%= restrictions %>',
    link: function (scope) {

    },
    controller: function($scope){

    }
  };
}]);
