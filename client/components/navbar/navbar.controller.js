'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Inicio',
    'state': 'main'
  },
  {
    'title': 'Historias',
    'state': 'stories'
  }];

  isCollapsed = true;
  //end-non-standard

  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }
}

angular.module('cbdProjectFullApp')
  .controller('NavbarController', NavbarController);
