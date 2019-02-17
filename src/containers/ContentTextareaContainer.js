import React from 'react';
import { handleContentChange } from '../actions/newArticleAction';
import { connect } from 'react-redux';

class ContentTextareaContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.props.handleContentChange(event.target.value)
  }

  render() {
    return (
      <textarea id="post_content_textarea" placeholder="开始你的创作..."  onChange={this.handleChange} value={this.props.article.content} />
    )
  }
}

const mapStatetoProps = (state) => ({
  article: state.new_article.article
})

const mapDispatchToProps = (dispatch) => ({
  handleContentChange: content => dispatch(handleContentChange(content)),
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ContentTextareaContainer)
