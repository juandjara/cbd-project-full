'use strict';
(function(){

class StoryComponent {
  constructor(Story, $mdDialog, Auth) {
    this.message = 'Hello';
    this.stories = Story.query();
    this.modals = $mdDialog;
    this.userIsAdmin = Auth.isAdmin;
    this.userIsLogged = Auth.isLoggedIn;
    this.Story = Story;
  }
  
  like(story){
    this.Story.like(story._id)
      .then(res => {
        this.stories.splice(this.stories.indexOf(story), 1);
        this.stories.unshift(res.data);
      })
  }
  
  dislike(story){
    this.Story.dislike(story._id)
      .then(res => {
        this.stories.splice(this.stories.indexOf(story), 1);
        this.stories.unshift(res.data);
      })
  }
  
  delete(deleted_story) {
    deleted_story.$remove();
    this.stories.splice(this.stories.indexOf(deleted_story), 1);
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
