(function(){
  'use strict';
  
  angular
    .module("cbdProjectFullApp.story")
    .controller("StoryEditController", StoryEditController);
  
  /** @ngInject */  
  function StoryEditController(Story, $state){
    var vm = this;
    
    vm.submitted = false;
    vm.story = {};
    vm.save = save;
    vm.StoryRest = Story;
    
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
          console.log("StoryEditController created story "+angular.toJson(story));
          $state.go('stories');
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
        console.log("StoryEditController recibio un form invalido!")
      }
    }
  }
  
})()