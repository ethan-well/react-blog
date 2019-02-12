import React from 'react';
import { Tag } from 'antd';
import { switchCategoryTag } from '../actions/newArticle';
import { connect } from 'react-redux';

const { CheckableTag } = Tag;

class CategoryTagContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = () => {
    console.log('xxxxxx');
    // this.props.switchCategoryTag(this.props.ownCategory)
  }

  render() {
    return <CheckableTag checked={this.props.checked} onChange={this.handleChange}>{this.props.categoryName}</CheckableTag>
  }
}

const mapStateToProps = (state, ownProps) => ({
  category: state.new_article.category,
  ownCategory: ownProps.ownCategory,
  checked: state.new_article.category == ownProps.ownCategory
})

const mapDisppatchToProps = (dispatch) => ({
  switchCategoryTag: category => dispatch(switchCategoryTag(category))
})

export default connect(
  mapStateToProps,
  mapDisppatchToProps
)(CategoryTagContainer)