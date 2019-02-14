import React from 'react';
import { handleContentChange } from '../actions/newArticle';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/getCategories';

class ContentTextareaContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.props.handleContentChange(event.target.value)
  }

  componentWillMount() {
    if (Object.keys(this.props.category).length === 0) {
      this.props.fetchCategories()
    }
  }

  render() {
    return (
      <textarea id="post_content_textarea" placeholder="开始你的创作..."  onChange={this.handleChange} value={this.props.article.content} />
    )
  }
}

const mapStatetoProps = (state) => ({
  category: state.category,
  article: state.new_article.article
})

const mapDispatchToProps = (dispatch) => ({
  handleContentChange: content => dispatch(handleContentChange(content)),
  fetchCategories: () =>  dispatch(fetchCategories())
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ContentTextareaContainer)
