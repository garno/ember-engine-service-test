// Vendor
import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';

// Config
import config from './config/environment';

const {modulePrefix, podModulePrefix} = config;

const App = Ember.Application.extend({
  modulePrefix,
  podModulePrefix,

  Resolver,

  engines: {
    myEngine: {
      dependencies: {
        services: [
          'my-global-service'
        ]
      }
    }
  }
});

loadInitializers(App, modulePrefix);

export default App;
