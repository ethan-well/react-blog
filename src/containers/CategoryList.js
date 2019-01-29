import { connect } from 'react-redux';
import { fetchCategories } from '../actions/getCategories';
import CategoryList from '../components/CategoryList';
import React from 'react';

class CategoryListContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchCategories())
  }

  render() {
    return (
      <CategoryList state={this.props.categories} />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  categories: state.category
})

export default connect(
  mapStateToProps
)(CategoryListContainer)