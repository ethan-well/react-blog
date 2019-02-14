import { Card } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { postArticle } from '../actions/newArticle';
import CategoryTagContainer from '../containers/CategoryTagContainer'

class PublishCardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
    if (
      this.props.article_data.title
      && this.props.article_data.content
      && this.props.article_data.category_id
      && this.props.article_data.access_token
    ) {
      this.props.postArticle(this.props.article_data)
    } else {
      alert('信息不完整，不能提交！')
    }
  }

  render() {
    return(
      <Card
        actions={[<a onClick={this.handleClick}>发布</a>]}
        title="发布文章"
        style={
          this.props.show_publish_card
          ? {
              width: 500,
              position: 'absolute',
              right: 27,
              zIndex: 100
            }
          : {display: 'none'}
        }
      >
        {
          this.props.categories && this.props.categories.length > 0
          ? this.props.categories.map((category)=> (
              <CategoryTagContainer
                key={category.id}
                ownCategory={category.id}
                categoryName={category.name}
              />
            ))
          : '暂无数据'
        }
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  show_publish_card: state.new_article.show_publish_card,
  article_data: {
    title: state.new_article.article.title,
    content: state.new_article.article.content,
    category_id: state.new_article.article.category_id,
    access_token: state.new_article.article.access_token,
  },
  categories: state.category.categories
})

const mapDispatchToProps = (dispatch) => ({
  postArticle: ({...new_article}) =>
    dispatch(postArticle(new_article))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishCardContainer)