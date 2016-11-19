(function() {
  'use strict';

  angular
    .module('githubRanked')
    .controller('CommitController', CommitController);

  /** @ngInject */
  function CommitController($stateParams, toastr, commitService) {
      var vm = this;
      vm.org = $stateParams.org
      vm.repo = $stateParams.repo
      commitService.commits($stateParams.org, $stateParams.repo).then(function(response) {
          vm.commits = response.data;
      }, function() {
          toastr.error('Can not find your repo.', 'Not found!')
      });
  }
})();
