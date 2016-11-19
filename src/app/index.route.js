(function() {
  'use strict';

  angular
    .module('githubRanked')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('organization', {
        url: '/',
        templateUrl: 'app/organization/organization.html',
        controller: 'OrganizationController',
        controllerAs: 'main'
      })
      .state('commits', {
        url: '/:org/:repo/commits',
        templateUrl: 'app/commit/commit.html',
        controller: 'CommitController',
        controllerAs: 'commit'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
