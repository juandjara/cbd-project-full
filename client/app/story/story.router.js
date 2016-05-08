'use strict';

angular.module('cbdProjectFullApp.story')
  .config(function ($stateProvider) {
    $stateProvider
      .state('story', {
        url: '/stories',
        template: '<story></story>'
      });
  });
