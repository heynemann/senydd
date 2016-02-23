import chai, {expect, should} from 'chai';

import expectJSX from 'chai-equal-jsx';
chai.use(expectJSX);
chai.should();

module.exports = {
  expect,
  should
};
