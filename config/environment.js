/* eslint-env node */

module.exports = function(environment) {
  // Ember-related configs
  const ENV = {
    modulePrefix: 'my-app',
    podModulePrefix: 'my-app/pods',
    environment,
    rootURL: '/',
    locationType: 'auto',
    fastboot: {
      fastbootHeaders: true
    }
  };

  ENV.EmberENV = {
    FEATURES: {},
    LOG_VERSION: false,
    EXTEND_PROTOTYPES: false
  };

  // App-related configs
  ENV.APP = {};

  if (environment === 'test') {
    ENV.locationType = 'none';

    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  return ENV;
};
