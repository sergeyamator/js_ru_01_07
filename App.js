import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    let txt = this.props.txt;
    let cat = this.props.cat;

    return <h1>{txt}  {cat}</h1>
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


