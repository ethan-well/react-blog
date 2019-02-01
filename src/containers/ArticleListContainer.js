import React from 'react';
import ArticleList from '../components/ArticleList';
import { toggleArticleTitle } from '../actions/getArticleList';
import { connect } from 'react-redux';

class ArticleListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <ArticleList articles={this.props.articles} toggleArticleTitle={this.props.toggleArticleTitle} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.article.articles
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleArticleTitle: id => dispatch(toggleArticleTitle(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleListContainer)
