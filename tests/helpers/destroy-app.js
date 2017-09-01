import Ember from 'ember';

const destroyApp = (application) => {
  Ember.run(application, 'destroy');

  if (window.server) {
    window.server.shutdown();
  }
};

export default destroyApp;
