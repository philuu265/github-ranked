(function() {
  'use strict';

  angular
    .module('githubRanked')
    .config(config);

  /** @ngInject */
  function config($logProvider, $locationProvider, toastrConfig) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }

})();
