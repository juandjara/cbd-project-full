(function(){
  'use strict';
  
  angular
    .module('cbdProjectFullApp')
    .component('lector', {
      templateUrl: 'components/lector/lector.html',
      controller: LectorComponent,
      controllerAs: 'vm',
      bindings: {
        story: '='
      }
    });
  
  /** @ngInject */
  function LectorComponent(){
    var vm = this;
    this.$onInit = function(){
      console.log("LectorComponent iniciado con la historia "+angular.toJson(vm.story));      
      vm.currentNode = vm.story.nodes? vm.story.nodes[0]: false;
    }
    
  }
  
})()