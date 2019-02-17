import React from 'react';
import Article from '../components/Article';
import { fetchArticle } from '../actions/getArticleAction';
import { toggleEditIcon, toggleBackIcon } from '../actions/newArticleAction';
import { switchMainContentAction } from '../actions/switchMainContentAction';
import { connect } from 'react-redux';
import history from '../history';
import { toggleDeleteIcon } from '../actions/deleteArticleAction';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Article
        article={this.props.article}
        loginSuccess={this.props.loginSuccess}
        access_token={this.props.access_token}
        toggleEditIcon={this.props.toggleEditIcon}
        toggleBackIcon={this.props.toggleBackIcon}
        toggleDeleteIcon={this.props.toggleDeleteIcon}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  article: state.article_detail.article,
  loginSuccess: state.authen.loginSuccess,
  access_token: state.new_article.article.access_token,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  toggleEditIcon: (article) => dispatch(toggleEditIcon(article), history.push('/new-aricle')),
  toggleBackIcon: () => {dispatch(toggleBackIcon), dispatch(switchMainContentAction('article_list'))},
  toggleDeleteIcon: (data) => dispatch(toggleDeleteIcon(data)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer)