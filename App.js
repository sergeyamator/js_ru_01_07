import React from 'react';
import ReactDom from 'react-dom';
import News from './news';
import ArticleList from './articleList';
import data from './list';
console.log(data);

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      txt: 'this is the state txt',
      cat: 0
    };

    this.update = this.update.bind(this);
  }

  update(e) {
    this.setState({
      txt: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update}/>
        <Widget txt={this.state.txt} update={this.update}/>
      </div>
    )
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
  <ArticleList article={data} />,
  document.getElementById('article')
);

export default App;
