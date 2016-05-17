(function(){
  'use strict';
  
  angular
    .module("cbdProjectFullApp.story")
    .controller("NodeEditController", NodeEditController);
  
  /** @ngInject */  
  function NodeEditController(Story, $state, $stateParams){
    var vm = this;
    var id = $stateParams.id;
    
    vm.story;
    vm.currentNode = null;    
    vm.currentLinks = [];
    vm.newLink = "";

    vm.getNode = getNode;    
    vm.addNode = addNode;
    vm.saveNode = saveNode;
    vm.setNode = setNode;
    vm.addLink = addLink;
    
    activate();
    
    function activate(){
      vm.story = Story.get({id: id});
    }
    
    function getNode(id){
      return vm.story.nodes.filter((node) => { 
        return node.id === id 
      })[0];
    }
    
    function addNode(){
      vm.currentNode = {
        id: "S"+vm.story._id+"-N"+(vm.story.nodes.length+1),
        text: "",
        children: [],
        title: "Nuevo capitulo"
      };
      vm.newLink = "";
    }
    
    function saveNode(){
      var foundNode = vm.story.nodes.filter((node) => {
        return node.id === vm.currentNode.id;
      });
      if(!foundNode.length) vm.story.nodes.push(vm.currentNode);
      else{
        var foundID = vm.story.nodes.indexOf(foundNode[0]);
        vm.story.nodes[foundID] = vm.currentNode;
      }
      
      Story.editNodes(vm.story._id, vm.story.nodes);
    }
    
    function setNode(node){
      vm.currentNode = node;
    }
    
    function addLink(){
      vm.currentNode.children.push(vm.newLink);
    }
    
    
    
  }
  
})()