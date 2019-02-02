import React from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';

class ContentMarkdownContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <ReactMarkdown source={this.props.content} />
    )
  }
}

const mapStateToProps = (state) => ({
  content: state.new_article.content
})

export default connect(
  mapStateToProps
)(ContentMarkdownContainer)