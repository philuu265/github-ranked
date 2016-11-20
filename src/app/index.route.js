(function() {
  'use strict';

  angular
    .module('githubRanked')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('organization', {
        url: '/github-ranked',
        templateUrl: 'app/organization/organization.html',
        controller: 'OrganizationController',
        controllerAs: 'main'
      })
      .state('commits', {
        url: '/github-ranked/:org/:repo/commits',
        templateUrl: 'app/commit/commit.html',
        controller: 'CommitController',
        controllerAs: 'commit'
      });

    $urlRouterProvider.otherwise('/github-ranked');
  }

})();
