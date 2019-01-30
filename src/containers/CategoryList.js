import { connect } from 'react-redux';
import { fetchCategories, fetchArticlesByCategoryId } from '../actions/getCategories';
import { fetchArticles } from '../actions/getArticles';
import CategoryList from '../components/CategoryList';
import React from 'react';

class CategoryListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCategories()
  }

  componentDidUpdate() {
    if (this.props.categories && this.props.categories.active_id) {
      this.props.fetchArticles(this.props.categories.active_id)
    }
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
  fetchArticles: id => dispatch(fetchArticles(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListContainer)