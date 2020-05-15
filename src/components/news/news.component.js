import {
    ArticleDescription,
    ArticleTitle,
    ImageStyle,
    NewsItemContainer
} from './news.styles';

import React from 'react';
import { connect } from 'react-redux';

const News = ({ news }) => (
    news
        ? //true case
        news.map(article => (
            <NewsItemContainer key={article.title}>
                <ArticleTitle>{article.title}</ArticleTitle>
                <ImageStyle src={article.urlToImage} alt="News Article from CNN" />
                <ArticleDescription>{article.description}</ArticleDescription>
                <a href={article.url} target="_blank">Reade More</a>
            </NewsItemContainer>
        ))
        : null//false case
);

const mapStateToProps = state => (
    {
        news: state.news
    }
);
export default connect(mapStateToProps)(News);