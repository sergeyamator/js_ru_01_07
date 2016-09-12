'use strict';

import React from 'react';
import Article from './article';

function ArticleList(props) {
  const articles = props.article;

  const listItems = articles.map((article) => <li key={article.id}><Article article={article}/></li>);
  console.log(listItems);

  return (
    <div>
      <h1>Article list</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}

export default ArticleList;