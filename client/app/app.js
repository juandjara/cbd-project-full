'use strict';

angular.module('cbdProjectFullApp', [
  'cbdProjectFullApp.auth',
  'cbdProjectFullApp.admin',
  'cbdProjectFullApp.story',  
  'cbdProjectFullApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
