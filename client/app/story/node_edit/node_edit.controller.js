(function(){
  'use strict';
  
  angular
    .module("cbdProjectFullApp.story")
    .controller("NodeEditController", NodeEditController);
  
  /** @ngInject */  
  function NodeEditController(Story, $state, $stateParams){
    var vm = this;
    
    vm.submitted = false;
    vm.story = {};
    vm.save = save;
    vm.StoryRest = Story;
    vm.story_id = $stateParams.id;
    
    function save(form){
      vm.submitted = true;

      if (form.$valid){
        Story.save({
          name: vm.story.name,
          info: vm.story.info,
          active: vm.story.active
        }).$promise
        .then(story => {
          // story created, redirect to home
          console.log("NodeEditController created story "+angular.toJson(story));
          $state.go('node_edit', {id: story_id});
        })
        .catch(err => {
          err = err.data;
          this.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
      }else{
        console.log("NodeEditController recibio un form invalido!")
      }
    }
  }
  
})()