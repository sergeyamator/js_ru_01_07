'use strict';

import React from 'react';
import ReactDom from 'react-dom';

import Button from './button';

class Wrapper extends React.Component {
  constructor() {
    super();
  }

  mount() {
    ReactDom.render(
      <Button/>,
      document.getElementById('a')
    );
  }

  unmount() {
    ReactDom.unmountComponentAtNode(document.getElementById('a'))
  }

  render() {
    return (
      <div>
        <button onClick={this.mount.bind(this)}>Mount</button>
        <button onClick={this.unmount.bind(this)}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;