import React from 'react';
import Article from '../components/Article';
import { fetchArticle } from '../actions/getArticle';
import { toggleEditIcon, toggleBackIcon } from '../actions/newArticle';
import { switchMainContent } from '../actions/switchMainContent';
import { connect } from 'react-redux';
import history from '../history';

class ArticleContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Article
        article={this.props.article}
        loginSuccess={this.props.loginSuccess}
        toggleEditIcon={this.props.toggleEditIcon}
        toggleBackIcon={this.props.toggleBackIcon}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  article: state.article_detail.article,
  loginSuccess: state.authen.loginSuccess,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchArticle: id => dispatch(fetchArticle(id)),
  toggleEditIcon: (article) => dispatch(toggleEditIcon(article), history.push('/new-aricle')),
  toggleBackIcon: () => {dispatch(toggleBackIcon), dispatch(switchMainContent('article_list'))},
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleContainer)