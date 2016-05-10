'use strict';

angular.module('cbdProjectFullApp.story')
  .factory('Story', function ($resource, $http) {
    var service = $resource('/api/stories/:id/:controller', {
      id: '@_id'
    });
    
    service.like = like;
    return service;
     
    function like(story_id){
      $http.post(`/api/stories/${story_id}/like`, {})
        .then(res => { console.log(res); })
    } 
    
  });
