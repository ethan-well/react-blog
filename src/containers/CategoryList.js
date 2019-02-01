import { connect } from 'react-redux';
import { fetchCategories, fetchArticlesByCategoryId } from '../actions/getCategories';
import { switchMainContent } from '../actions/switchMainContent';
import { fetchArticles } from '../actions/getArticleList';
import CategoryList from '../components/CategoryList';
import React from 'react';

class CategoryListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchCategories()
    this.props.switchMainContent('article_list')
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
  toggleArticle: id => {dispatch(fetchArticlesByCategoryId(id)), dispatch(switchMainContent('article_list'))},
  fetchArticles: id => dispatch(fetchArticles(id)),
  switchMainContent: main => dispatch(switchMainContent(main))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListContainer)