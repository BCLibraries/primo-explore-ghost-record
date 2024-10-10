angular.module('bc-ghost-record', []).controller('prmBriefResultAfterController', [function () {
  this.$onInit = function () {
    var vm = this;
    vm.resType = vm.parentCtrl.item.pnx.display.type;
    if (vm.resType == 'DELETED') {
    	vm.indexMsg = 'Deletion in process';
    } else {
    	vm.indexMsg = null;
    }
  };
}]).component('prmBriefResultAfter', {
  bindings: { parentCtrl: '<' },
  controller: 'prmBriefResultAfterController',
  templateUrl: 'primo-explore-ghost-record/html/ghost-record.html'
});
