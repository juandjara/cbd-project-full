(function(){
  'use strict';
  
  angular
    .module('cbdProjectFullApp.story')
    .controller('StoryDetailController', StoryDetailController);
    
  /** @ngInject */
  function StoryDetailController(Story, $stateParams){
    var vm = this;
    var id = $stateParams.id;
    
    activate();
    
    function activate(){
      vm.story = Story.get({id: id});
    }
    
  }
    
    
})()