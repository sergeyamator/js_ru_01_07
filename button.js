'use strict';

import React from 'react';

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
     val: 0
    };

    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: this.state.val + 1})
  }

  render() {
    return <button onClick={this.update}>{this.state.val}</button>
  }

  componentWillMount() {
    console.log('mounting');
  }

  componentDidMount() {
    console.log('mounted');
  }

  componentWillUnmount() {
    console.log('bye');
  }
}

export default Button;