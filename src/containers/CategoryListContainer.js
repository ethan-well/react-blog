import { connect } from 'react-redux';
import { fetchCategories, fetchArticlesByCategoryId } from '../actions/getCategories';
import { switchMainContent } from '../actions/switchMainContent';
import { fetchArticles } from '../actions/getArticleList';
import { newArticle } from '../actions/newArticle';
import CategoryListComponent from '../components/CategoryListComponent';
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
      <CategoryListComponent
        state={this.props.categories}
        toggleArticle={this.props.toggleArticle}
        toggleAddIcon={this.props.toggleAddIcon}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: state.category
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () =>  dispatch(fetchCategories()),
  toggleArticle: (id, main) => {dispatch(fetchArticlesByCategoryId(id)), dispatch(switchMainContent(main))},
  fetchArticles: id => dispatch(fetchArticles(id)),
  switchMainContent: main => dispatch(switchMainContent(main)),
  toggleAddIcon: (id) => {dispatch(newArticle(id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListContainer)