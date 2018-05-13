import React from 'react';
import { Tag } from 'antd';
const { CheckableTag } = Tag;
import PropTypes from 'prop-types';

class MyTag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    }
  }

  handleChange = (e) => {
    this.setState({ checked:  e });
    this.context.callback(e, this.refs.tag.props.children);
  }

  render() {
    return <CheckableTag {...this.props} ref='tag'  checked={this.state.checked} onChange={ this.handleChange } />;
  }
}


MyTag.contextTypes = {
  callback: PropTypes.func,
}
export default MyTag;
