import React from 'react';
import Article from '../components/Article';
import { fetchArticle } from '../actions/getArticle';
import { connect } from 'react-redux';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillUpdate (nextProps, nextState) {
    if (nextProps.article_id && (nextProps.article_id != this.props.article_id)) {
      this.props.fetchArticle(nextProps.article_id)
    }
  }

  render() {
    return(
      <Article article={this.props.article} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  article_id: state.article.article_id,
  article: state.article_detail.article
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArticle: id => dispatch(fetchArticle(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer)