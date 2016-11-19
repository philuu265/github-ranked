/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('githubRanked')
    .constant('malarkey', malarkey)
    .constant('moment', moment)
    .constant('ORGANIZATION', {
      'DEFAULT': 'nasa',
      'CHANGE_EVENT': 'change-org'
    });
})();
