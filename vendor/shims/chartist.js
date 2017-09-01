(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['Chartist'],
      __esModule: true,
    };
  }

  define('chartist', [], vendorModule);
})();
