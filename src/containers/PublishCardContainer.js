import { Card, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { postArticle } from '../actions/newArticle';

class PublishCardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card
        title="发布文章"
        style={ {display: this.props.show_publish_card ? '' : 'none'} }
        className="post-tags-selector"
        actions={[<Button type="primary" onClick={this.props.postArticle(this.props.article_data)} ghost>发布</Button>]}
      >
        <p className="custom-margin">选择分类</p>
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  show_publish_card: state.new_article.show_publish_card,
  article_data: {
    title: state.new_article.title,
    content: state.new_article.connect,
    categery_id: state.new_article.categery_id,
    user_id: state.new_article.user_id
  }
})

const mapDispatchToProps = (dispatch) => ({
  postArticle: (title, content, categery_id, user_id) =>
    dispatch(postArticle(title, content, categery_id,user_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishCardContainer)