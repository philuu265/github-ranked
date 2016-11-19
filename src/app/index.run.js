(function() {
  'use strict';

  angular
    .module('githubRanked')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
