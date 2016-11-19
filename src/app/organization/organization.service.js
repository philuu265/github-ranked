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
          url: 'http://api.github.com/orgs/' +id + '/repos'
        });
      }
  }
})();
