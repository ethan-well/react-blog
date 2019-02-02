import React from 'react';
import { connect } from 'react-redux';
import NewArticleView from '../views/NewArticleView';
import HomeView from '../views/HomeView';

class IndexContainer extends React.Component {
  render() {
    return (
      this.props.main_content == 'new_article'
      ? <NewArticleView />
      : <HomeView />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  main_content: state.main_content.main_content
})

export default connect(
  mapStateToProps
)(IndexContainer)
