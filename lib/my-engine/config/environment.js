/* eslint-env node */

'use strict';

module.exports = function(environment) {
  const ENV = {
    environment,
    modulePrefix: 'my-engine'
  };

  return ENV;
};
