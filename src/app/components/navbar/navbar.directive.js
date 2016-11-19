(function() {
  'use strict';

  angular
    .module('githubRanked')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController($scope, $log, localStorageService, ORGANIZATION) {
      $scope.search = function(org) {
        $log.debug(ORGANIZATION.CHANGE_EVENT + " " + org);
        localStorageService.set("github-ranked-org",org);
        $scope.$emit(ORGANIZATION.CHANGE_EVENT,org);
        $scope.org = "";
      }
    }
  }

})();
