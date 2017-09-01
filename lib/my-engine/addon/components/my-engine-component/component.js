// Vendor
import Ember from 'ember';

const {computed, inject} = Ember;

export default Ember.Component.extend({
  myGlobalService: inject.service('my-global-service'),

  testMethod: computed(function() {
    return this.get('myGlobalService').fakeMethod();
  })
});
