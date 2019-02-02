import React from 'react';
import { handleTitleChange } from '../actions/newArticle';
import { connect } from 'react-redux';

class TitleInputContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title
    }
  }

  handleChange = (event) => {
    this.setState({title: event.target.value})
  }

  componentDidUpdate () {
    this.props.handleTitleChange(this.state.title)
  }

  render() {
    return (
      <input id="post-title" placeholder="文章标题" value={this.state.title} onChange={this.handleChange} type='text' />
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.new_article.title
})

const mapDispatchToProps = (dispatch) => ({
  handleTitleChange: title => dispatch(handleTitleChange(title))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TitleInputContainer)