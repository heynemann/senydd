require('normalize.css');
require('styles/App.css');

import React from 'react';

import Header from '../components/Header';


class IndexComponent extends React.Component {
  render() {
    return (
      <Header />
    );
  }
}

IndexComponent.defaultProps = {
};

export default IndexComponent;
