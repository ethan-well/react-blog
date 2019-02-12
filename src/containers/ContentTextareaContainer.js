import React from 'react';
import { handleContentChange } from '../actions/newArticle';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/getCategories';

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

  componentWillMount() {
    if (Object.keys(this.props.category).length === 0) {
      this.props.fetchCategories()
    }
  }

  componentDidUpdate() {
    this.props.handleContentChange(this.state.content)
  }

  render() {
    return (
      <textarea id="post_content_textarea" placeholder="开始你的创作..."  onChange={this.handleChange} value={this.state.content} />
    )
  }
}

const mapStatetoProps = (state) => ({
  content: state.new_article.content,
  category: state.category
})

const mapDispatchToProps = (dispatch) => ({
  handleContentChange: content => dispatch(handleContentChange(content)),
  fetchCategories: () =>  dispatch(fetchCategories())
})

export default connect(
  mapStatetoProps,
  mapDispatchToProps
)(ContentTextareaContainer)
