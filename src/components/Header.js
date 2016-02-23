require('normalize.css');
require('styles/App.css');

import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import changeRoute from '../actions/navigation/changeRoute.js';


class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.handleNavClick = this.handleNavClick.bind(this);
  }

  handleNavClick(ev) {
    const { store } = this.context;
    let url = ev.target.hash;
    store.dispatch(changeRoute(url));
  }

  render() {
    return (
      <header>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#/">Tales of Senydd</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} onClick={this.handleNavClick} href="#/">Home</NavItem>
            <NavItem eventKey={2} onClick={this.handleNavClick} href="#/new">New Game</NavItem>
          </Nav>
        </Navbar>
      </header>
    );
  }
}

HeaderComponent.defaultProps = {
};

HeaderComponent.contextTypes = {
  store: React.PropTypes.object
};

export default HeaderComponent;
