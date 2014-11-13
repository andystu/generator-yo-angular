"use strict";

angular.module('ng.model').factory('<%= scriptModelName %>Model', ['$resource', function($resource) {
  function <%= scriptModelName %>Model() {
    this.url = '';
    return $resource(this.url, {id: '@id'},{
      'get':    {method:'GET','url':this.url},
      'getAll':  {method:'GET', isArray:true,'url':this.url},
      'update': {method:'PUT','url':this.url},
      'remove': {method:'DELETE','url':this.url}
    });
  }
  return new <%= scriptModelName %>Model();
}]);
