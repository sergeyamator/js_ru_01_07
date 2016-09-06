import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: 'this is the state txt',
      cat: 0
    };
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input type="text"
               onChange={this.update.bind(this)} />

        <h1>{this.state.txt}</h1>
      </div>
    )
  }
}

App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

App.defaultProps = {
  txt: 'This is the default txt'
};

ReactDOM.render(
  <App cat={5} txt="This is a new props text"/>,
  document.getElementById('app')
);


