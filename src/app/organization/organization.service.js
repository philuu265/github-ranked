(function() {
  'use strict';

  angular
    .module('githubRanked')
    .service('OrganizationService', OrganizationService);

  /** @ngInject */
  function OrganizationService($http) {
      this.repos = function(id) {
        return $http({
          method: 'GET',
          url: 'https://api.github.com/orgs/' +id + '/repos'
        });
      }
  }
})();
