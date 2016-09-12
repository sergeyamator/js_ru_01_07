'use strict';

import React from 'react';

class Article extends React.Component {
  state = {
    isOpen: false
  };

  render() {
    const article = this.props.article;
    const isOpen = this.state.isOpen;
    const body = isOpen ? <section>{article.text}</section> : null;

    return (
      <div>
        <h1 onClick={this.toggleOpen}>{article.user}</h1>
        {body}
      </div>
    );
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
}

export default Article;