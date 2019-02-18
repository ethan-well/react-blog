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
        access_token={this.props.access_token}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.article.articles,
  isFetching: state.article.isFetching,
  access_token: state.authen.access_token,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleArticleTitle: (id, access_token) => { dispatch(fetchArticle(id, access_token)); dispatch(switchMainContentAction('article_content'))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer)
