'use strict';

angular.module('cbdProjectFullApp.auth', [
  'cbdProjectFullApp.constants',
  'cbdProjectFullApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
