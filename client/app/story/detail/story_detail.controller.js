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
    vm.currentNode;
    vm.currentChildren;

    vm.getNode = getNode;
    vm.setNode = setNode;    

    activate();
    
    function activate(){
      vm.story = Story.get({id: id});
      vm.story.$promise.then((story) => {
        vm.currentNode = vm.story.nodes[0];
        vm.currentChildren = vm.currentNode? getChidlren(vm.currentNode, story) : [];        
      });
    }
    
    function getNode(id){
      return vm.story.nodes.filter((node) => { 
        return node.id === id 
      })[0];
    }
    
    function setNode(node){
      vm.currentNode = node;
      vm.currentChildren = getChidlren(node, vm.story);
    }
    
    function getChidlren(_node, story){
      return _node.children.map((child) => {
        return getNode(child);
      });
    }
    
  }
    
    
})()