import { Card, Button } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { postArticle } from '../actions/newArticle';
import CategoryTagContainer from '../containers/CategoryTagContainer'

class PublishCardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <Card
        title="发布文章"
        style={{ width: 500, position: 'absolute', right: 27, zIndex: 100 }}
      >
        {
          this.props.categories && this.props.categories.length > 0
          ? this.props.categories.map((category)=> {
            return <CategoryTagContainer key={category.id} ownCategory={category.id} categoryName={category.name} />
            })
          : '暂无数据'
        }
      </Card>
    )
  }
}

const mapStateToProps = (state) => ({
  show_publish_card: state.new_article.show_publish_card,
  article_data: {
    title: state.new_article.title,
    content: state.new_article.connect,
    category_id: state.new_article.category_id,
    user_id: state.new_article.user_id
  },
  categories: state.category.categories
})

const mapDispatchToProps = (dispatch) => ({
  postArticle: (title, content, category_id, user_id) =>
    dispatch(postArticle(title, content, category_id,user_id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishCardContainer)