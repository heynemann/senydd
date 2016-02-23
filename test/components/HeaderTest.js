/*eslint-env node, mocha */
/*eslint no-console: 0*/
'use strict';

import React from 'react';
//const TestUtils = require('react-addons-test-utils');
import createComponent from 'helpers/shallowRenderHelper';
import {expect} from '../assertions';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import HeaderComponent from 'components/Header';

describe('HeaderComponent', () => {
  it('should have brand navigation', () => {
    let comp = createComponent(<HeaderComponent />);

    expect(comp).to.includeJSX(
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#/">Tales of Senydd</a>
        </Navbar.Brand>
      </Navbar.Header>
    )

    expect(comp).to.includeJSX(
      <Nav>
        <NavItem eventKey={1} onClick={function(){}} href="#/">Home</NavItem>
        <NavItem eventKey={2} onClick={function(){}} href="#/new">New Game</NavItem>
      </Nav>
    )
  });
});
