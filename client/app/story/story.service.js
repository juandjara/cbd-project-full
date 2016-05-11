'use strict';

angular.module('cbdProjectFullApp.story')
  .factory('Story', function ($resource, $http) {
    var service = $resource('/api/stories/:id/:controller', {
      id: '@_id'
    });
    
    service.like    = like;
    service.dislike = dislike;
    return service;
     
    function like(story_id){
      return $http.post(`/api/stories/${story_id}/like`, {})
        .then(res => { console.log(res); return res; })
    }
    
    function dislike(story_id){
      return $http.post(`/api/stories/${story_id}/dislike`, {})
        .then(res => { console.log(res); return res; })
    }
    
  });
