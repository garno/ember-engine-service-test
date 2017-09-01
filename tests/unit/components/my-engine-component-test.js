// Vendor
import Ember from 'ember';
import engineResolverFor from 'ember-engines/test-support/engine-resolver-for';
import {describe, it} from 'mocha';
import {setupComponentTest, setupTest} from 'ember-mocha';
import chai from 'chai';

const {expect} = chai;

describe('Unit | Components | my-engine-component', () => {
  setupComponentTest('my-engine-component', {
    resolver: engineResolverFor('my-engine'),
    needs: ['service:my-global-service'],
    unit: true
  });

  describe('testMethod', () => {
    it('should return true', function() {
      const component = this.subject();

      return expect(component.get('testMethod')).to.equal(true);
    });
  });
});
