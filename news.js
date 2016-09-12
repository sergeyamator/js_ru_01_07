'use strict';

import React from 'react';

let news = [
  {
    author: 'Sergey Glyharev',
    text: 'In this evening'
  },

  {
    author: 'Viktoria',
    text: 'She loves Kiev'
  },

  {
    author: 'Sasha',
    text: 'He wants some iphone'
  }
];


class News extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="app">
        Hi every one, this is a new post
      </div>
    )
  }

}

export default News;