import React from 'react';
import ReactDom from 'react-dom';
import News from './news';
import ArticleList from './articleList';
import data from './list';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      red: 0,
      green: 0,
      blue: 0
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      red: ReactDom.findDOMNode(this.refs.red.refs.input).value,
      green: ReactDom.findDOMNode(this.refs.green).value,
      blue: ReactDom.findDOMNode(this.refs.blue).value
    })
  }

  render() {
    return (
      <div>
        <Slider ref="red" update={this.update}/>
        {this.state.red}
        <Slider ref="green" update={this.update}/>
        {this.state.green}
        <Slider ref="blue" update={this.update}/>
        {this.state.blue}
      </div>
    )
  }
}


class Slider extends React.Component {
  render() {
    return (
      <div >
        <input ref="input" type="range"
               min="0"
               max="255"
               onChange={this.props.update}
        />
        </div>
    );
  }
}

const Widget = (props) => {
  return (
    <div>
      <input type="text"
             onChange={props.update}/>

      <h1>{props.txt}</h1>
    </div>
  )
};

ReactDom.render(
  <News/>,
  document.getElementById('news')
);

ReactDom.render(
  <ArticleList article={data}/>,
  document.getElementById('article')
);

export default App;
