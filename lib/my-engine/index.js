/* eslint-env node */

'use strict';

const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'my-engine',

  lazyLoading: false,

  isDevelopingAddon() {
    return true;
  }
});
