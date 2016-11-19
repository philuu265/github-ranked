(function() {
  'use strict';

  angular
    .module('githubRanked')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $log, $state, ORGANIZATION) {
    $scope.$on(ORGANIZATION.CHANGE_EVENT, function() {
      $state.go('organization', {}, {reload: true});
    });
  }
})();
