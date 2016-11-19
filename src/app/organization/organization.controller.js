(function() {
  'use strict';

  angular
    .module('githubRanked')
    .controller('OrganizationController', OrganizationController);

  /** @ngInject */
  function OrganizationController($log, $stateParams, toastr, localStorageService, OrganizationService, ORGANIZATION) {
    $log.debug("organization " + $stateParams.org);
    var vm = this;
    vm.org = localStorageService.get("github-ranked-org") || ORGANIZATION.DEFAULT;
    $log.debug(vm.org);
    OrganizationService.repos(vm.org).then(function(response) {
        vm.repos = response.data;
        vm.organization = vm.repos[0].owner;
    }, function() {
        toastr.error('Can not find your organization.', 'Not found!')
    });
  }
})();
