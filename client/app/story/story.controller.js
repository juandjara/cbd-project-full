'use strict';
(function(){

class StoryComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('cbdProjectFullApp.story')
  .component('storyList', {
    templateUrl: 'app/story/stories.html',
    controller: StoryComponent
  });

})();
