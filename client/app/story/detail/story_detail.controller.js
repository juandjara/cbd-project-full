(function(){
  'use strict';
  
  angular
    .module('cbdProjectFullApp.story')
    .controller('StoryDetailController', StoryDetailController);
    
  /** @ngInject */
  function StoryDetailController(Story, $stateParams){
    var vm = this;
    var id = $stateParams.id;
    vm.story = null;
    vm.getNode = getNode;
    
    activate();
    
    function activate(){
      vm.story = Story.get({id: id});
    }
    
    function getNode(id){
      return vm.story.nodes.filter((node) => { return node.id === id })[0];
    }
    
  }
    
    
})()