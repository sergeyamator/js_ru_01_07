'use strict';

import React from 'React';

// Have state
class App extends React.Component {
  render() {
    // return <div>HI</div> <b>Bold</b>  Doesn't work

    // If we want to render a few dom element we should wrap it into wrapper
    return (
      <div>
        <h1>Hello</h1>
        <b>Bold</b>
      </div>
    );
  }
}

// doesn't have state
// const App = () => <h1>Hello</h1>

export default App