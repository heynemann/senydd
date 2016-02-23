'use strict';

require('core-js/fn/object/assign');

import chai from 'chai';
import equalJSX from 'chai-equal-jsx';

chai.use(equalJSX);

// Add support for all files in the test directory
const testsContext = require.context('.', true, /(Test\.js$)|(Helper\.js$)/);
testsContext.keys().forEach(testsContext);
