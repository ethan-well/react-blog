import React from 'react';
import { handleContentChange } from '../actions/newArticle';
import { connect } from 'react-redux';

class ContentTextareaContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: this.props.content
    }
  }

  handleChange = (event) => {
    this.setState({content: event.target.value})
  }

  componentDidUpdate () {
    this.props.handleContentChange(this.state.content)
  }

  render() {
    return (
      <textarea id="post_content_textarea" placeholder="开始你的创作..."  onChange={this.handleChange} value={this.state.content} />
    )
  }
}

const mapStatetoProps = (state) => ({
  content: state.new_article.content
})

const mapDispatchToProps = (dispatch) => ({
  handleContentChange: content => dispatch(handleContentChange(content))
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps

)(ContentTextareaContainer)
