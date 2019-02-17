import React from 'react';
import CloseIconComponent from '../components/CloseIconComponent';
import { toggleCloseIcon } from '../actions/newArticleAction';
import { connect } from 'react-redux';

class CloseIconContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <CloseIconComponent toggleCloseIcon={this.props.toggleCloseIcon} />
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleCloseIcon: () => dispatch(toggleCloseIcon)
})

export default connect(
  null,
  mapDispatchToProps
)(CloseIconContainer)