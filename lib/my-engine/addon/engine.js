// Vendor
import Engine from 'ember-engines/engine';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';

// Config
import config from './config/environment';

const {modulePrefix} = config;

const MyEngine = Engine.extend({
  modulePrefix,
  Resolver,

  dependencies: {
    services: [
      'my-global-service'
    ]
  }
});

loadInitializers(MyEngine, modulePrefix);

export default MyEngine;
