import React from 'react';
import ArticleListContainer from '../containers/ArticleListContainer';
import ArticleContainer from '../containers/ArticleContainer';
import { connect } from 'react-redux';


class MainContentContainer extends React.Component {
  render() {
    return (
      this.props.main_content == 'article_content'
      ? <ArticleContainer />
      : <ArticleListContainer />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  main_content: state.main_content.main_content
})

export default connect(
  mapStateToProps
)(MainContentContainer)
