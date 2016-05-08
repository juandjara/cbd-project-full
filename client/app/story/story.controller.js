'use strict';
(function(){

class StoryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('cbdProjectFullApp.story')
  .component('story', {
    templateUrl: 'app/story/story.html',
    controller: StoryComponent
  });

})();
