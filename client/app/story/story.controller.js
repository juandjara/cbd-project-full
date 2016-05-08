'use strict';
(function(){

class StoryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('cbdProjectFullApp.story')
  .component('stories', {
    templateUrl: 'app/story/stories.html',
    controller: StoryComponent
  });

})();
