/*eslint-env node, mocha */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
//const TestUtils = require('react-addons-test-utils');
import createComponent from 'helpers/shallowRenderHelper';
import {expect} from '../assertions';

import IndexComponent from 'components/Main';

describe('MainComponent', () => {
  it('should have its component name as default className', () => {
    let comp = createComponent(<IndexComponent />);

    expect(comp).to.equalJSX(
      <div className="index">
        Hello Senydd!
      </div>
    )
    expect(comp.props.className).to.equal('index');
  });
});
