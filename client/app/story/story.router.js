'use strict';

angular.module('cbdProjectFullApp.story')
  .config(function ($stateProvider) {
    $stateProvider
      .state('stories', {
        url: '/stories',
        template: '<story-list></story-list>'
      })
      .state('story_edit', {
        url: '/stories/edit',
        templateUrl: 'app/story/edit/story_edit.html',
        controller: 'StoryEditController',
        controllerAs: 'vm'
      })
      .state('story_detail', {
        url: '/story/:id',
        templateUrl: 'app/story/detail/story_detail.html',
        controller: 'StoryDetailController',
        controllerAs: 'vm'
      });
  });
