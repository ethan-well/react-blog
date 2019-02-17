import React from 'react';
import { handleTitleChange } from '../actions/newArticleAction';
import { connect } from 'react-redux';

class TitleInputContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleChange = (event) => {
    this.props.handleTitleChange(event.target.value)
  }

  render() {
    return (
      <input id="post-title" placeholder="文章标题" value={this.props.title} onChange={this.handleChange} type='text' />
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.new_article.article.title || ''
})

const mapDispatchToProps = (dispatch) => ({
  handleTitleChange: title => dispatch(handleTitleChange(title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleInputContainer)