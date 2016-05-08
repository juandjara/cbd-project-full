'use strict';
(function(){

class StoryComponent {
  constructor(Story) {
    this.message = 'Hello';
    this.stories = Story.query();
  }
}

angular.module('cbdProjectFullApp.story')
  .component('storyList', {
    templateUrl: 'app/story/stories.html',
    controller: StoryComponent,
    controllerAs: 'vm'
  });

})();
