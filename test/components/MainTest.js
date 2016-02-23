/*eslint-env node, mocha */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
//const TestUtils = require('react-addons-test-utils');
import createComponent from 'helpers/shallowRenderHelper';
import {expect} from '../assertions';

import HeaderComponent from 'components/Header';
import IndexComponent from 'components/Main';

describe('MainComponent', () => {
  it('should have the header component', () => {
    let comp = createComponent(<IndexComponent />);

    expect(comp).to.includeJSX(
      <HeaderComponent />
    )
  });
});
