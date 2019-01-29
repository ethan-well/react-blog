import { connect } from 'react-redux';
import { fetchCategories, fetchArticlesByCategoryId } from '../actions/getCategories';
import CategoryList from '../components/CategoryList';
import React from 'react';

class CategoryListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    return (
      <CategoryList state={this.props.categories} toggleArticle={this.props.toggleArticle} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: state.category
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () =>  dispatch(fetchCategories()),
  toggleArticle: id => dispatch(fetchArticlesByCategoryId(id)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListContainer)