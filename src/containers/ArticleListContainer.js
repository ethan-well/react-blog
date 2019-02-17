import React from 'react';
import ArticleList from '../components/ArticleListComponent';
import { fetchArticle } from '../actions/getArticleAction';
import { switchMainContentAction } from '../actions/switchMainContentAction';
import { connect } from 'react-redux';

class ArticleListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ArticleList
        articles={this.props.articles}
        isFetching={this.props.isFetching}
        toggleArticleTitle={this.props.toggleArticleTitle}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.article.articles,
  isFetching: state.article.isFetching
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleArticleTitle: id => { dispatch(fetchArticle(id)); dispatch(switchMainContentAction('article_content'))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer)
