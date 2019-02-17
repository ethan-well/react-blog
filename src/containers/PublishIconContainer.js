import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'antd';
import { togglePublishIcon } from '../actions/newArticleAction';

class PublishIconContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='save-post'>
        <a className='save-post-link' onClick={ this.props.togglePublishIcon }>
          发布
          <Icon type={ this.props.show_publish_card ? 'caret-up' : 'caret-down' }/>
        </a>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  show_publish_card: state.new_article.show_publish_card
})

const mapDispatchToProps = (dispatch) => ({
  togglePublishIcon: () => dispatch(togglePublishIcon)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishIconContainer)
