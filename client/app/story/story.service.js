'use strict';

angular.module('cbdProjectFullApp.story')
  .factory('Story', function ($resource) {
    return $resource('/api/stories/:id/:controller', {
      id: '@_id'
    });
  });
