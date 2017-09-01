(function() {
  function vendorModule() {
    'use strict';

    return {
      'default': self['mapboxgl'],
      __esModule: true,
    };
  }

  define('mapbox-gl', [], vendorModule);
})();
