import React from 'react';
import ConfirmModelComponent from '../components/ConfirmModelComponent';
import { connect } from 'react-redux';
import { toggleEnsureIcon, toggleCancelIcon } from '../actions/newArticle';

class ConfirmModelContainer extends React.Component {
  render() {
    return(
      <ConfirmModelComponent
        visible={this.props.visible}
        handleOk={this.props.handleOk}
        handleCancel={this.props.handleCancel}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  visible: state.new_article.show_ensure_component
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleOk: () => dispatch(toggleEnsureIcon),
  handleCancel: () => dispatch(toggleCancelIcon)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmModelContainer)