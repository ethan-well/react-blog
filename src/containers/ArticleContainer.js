import React from 'react';
import Article from '../components/Article';
import { connect } from 'react-redux';

mapStateToProps = (state, ownProps) => ({
  article: state.article.article
})

export default connect(
  mapStateToProps
)(Article)