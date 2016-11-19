(function() {
  'use strict';

  angular
    .module('githubRanked')
    .service('commitService', commitService);

  /** @ngInject */
  function commitService($http) {
      this.commits = function(owner, repo) {
         return $http({
           method: 'GET',
           url: 'https://api.github.com/repos/'+ owner + '/' + repo + '/commits'
         });
      }
  }
})();
