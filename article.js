'use strict';

import React from 'react';

function Article(props) {
  const article = props.article;

  return (
    <div>
      <h1>{article.title}</h1>
      <section>{article.text}</section>
    </div>
  );
}

export default Article;