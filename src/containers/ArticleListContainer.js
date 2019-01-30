import React from 'react';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';

class ArticleListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
    return(
      <ArticleList articles={this.props.articles} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  articles: state.article.articles
})

export default connect(
  mapStateToProps
)(ArticleListContainer)
