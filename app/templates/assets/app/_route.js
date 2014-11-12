"use strict";

angular.module('ng.router').config(function ($urlRouterProvider, $stateProvider) {
  $stateProvider.state('common', {
    abstract: true,
    url: '',
    templateUrl: '../assets/common/layout/layout.html'
  }).state('common.main', {
    url: "/",
    views: {
      "header@common": {
        templateUrl: '../assets/common/partials/header.html'
      },
      "section@common": {
        templateUrl: '../assets/app/main/content.html',
        controller: 'mainCtrl'
      },
      "footer@common": {
        templateUrl: '../assets/common/partials/footer.html'
      }
    }
  });
});
