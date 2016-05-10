'use strict';
(function(){

class StoryComponent {
  constructor(Story, $mdDialog, Auth) {
    this.message = 'Hello';
    this.stories = Story.query();
    this.modals = $mdDialog;
    this.userIsAdmin = Auth.isAdmin;
    this.like = Story.like;
  }
  
  delete(story) {
    story.$remove();
    this.stories.splice(this.stories.indexOf(story), 1);
  }
  
  confirmDelete(ev, story){
    let confirm = this.modals.confirm()
                    .textContent(`¿Seguro que quieres borrar '${story.name}'?`)
                    .ariaLabel("Confirmar el borrado")
                    .targetEvent(ev)
                    .ok("Si")
                    .cancel("No");
    this.modals.show(confirm).then(() => { this.delete(story); });
  }
  
}

angular.module('cbdProjectFullApp.story')
  .component('storyList', {
    templateUrl: 'app/story/stories.html',
    controller: StoryComponent,
    controllerAs: 'vm'
  });

})();
