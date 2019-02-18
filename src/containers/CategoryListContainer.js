import { connect } from 'react-redux';
import { fetchCategories, fetchArticlesByCategoryId } from '../actions/getCategoriesAction';
import { switchMainContentAction } from '../actions/switchMainContentAction';
import { fetchArticles } from '../actions/getArticleListAction';
import { newArticleAction } from '../actions/newArticleAction';
import CategoryListComponent from '../components/CategoryListComponent';
import React from 'react';

class CategoryListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.categories && this.props.categories.active_id) return

    this.props.fetchCategories()
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
        loginSuccess={this.props.loginSuccess}
        toggleArticle={this.props.toggleArticle}
        toggleAddIcon={this.props.toggleAddIcon}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: state.category,
  loginSuccess: state.authen.loginSuccess,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () =>  dispatch(fetchCategories()),
  toggleArticle: (id) => {dispatch(fetchArticlesByCategoryId(id)); dispatch(switchMainContentAction('article_list'))},
  fetchArticles: id => dispatch(fetchArticles(id)),
  switchMainContentAction: main => dispatch(switchMainContentAction(main)),
  toggleAddIcon: (id) => {dispatch(newArticleAction(id))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryListContainer)