import { Card, Checkbox } from 'antd';
import React from 'react';
import { connect } from 'react-redux';
import { createArticle, updateArticle, toggleCloseAlertIcon, togglePublicCheckbox } from '../actions/newArticle';
import CategoryTagContainer from '../containers/CategoryTagContainer';
import AlertIt from '../views/AlertIt';
import { goToLoginPage } from '../actions/authenAction';
import { fetchCategories } from '../actions/getCategories';

class PublishCardContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    if (this.props.article_data.access_token === undefined) {
      this.props.goToLoginPage();
    }
  }

  componentDidMount() {
    if (this.props.categories === undefined || this.props.categories.length === 0) {
      this.props.fetchCategories();
    }
  }

  handleChange = () => {
    this.props.togglePublicCheckbox();
  }

  handleClick = () => {
    if (
      this.props.article_data.title
      && this.props.article_data.content
      && this.props.article_data.category_id
      && this.props.article_data.access_token
    ) {
      this.props.edit
      ? this.props.updateArticle(this.props.article_data)
      : this.props.createArticle(this.props.article_data)
    } else {
      alert('信息不完整，不能提交！')
    }
  }

  handleClose = () => {
    this.props.toggleCloseAlertIcon()
  }

  render() {
    return(
      <div>
        <Card
          actions={[
            <span>
              <Checkbox checked={this.props.checked} onChange={this.handleChange}>Public</Checkbox>
              <a style={{display: 'inline', color: '#40a9ff'}} onClick={this.handleClick}>发布</a>
            </span>]}
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
        { this.props.alert && this.props.alert.alert_it &&
            <AlertIt message={this.props.alert.message} handleClose={this.handleClose} type='warning'/>
        }
      </div>
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
    id: state.new_article.article.id,
    private: state.new_article.article.private
  },
  categories: state.category.categories,
  edit: state.new_article.edit,
  alert: state.new_article.alert,
  category_id: state.category.active_id,
  checked: !state.new_article.article.private
})

const mapDispatchToProps = (dispatch) => ({
  createArticle: ({...new_article}) =>
    dispatch(createArticle(new_article)),
  updateArticle: ({...new_article}) =>
    dispatch(updateArticle(new_article)),
  toggleCloseAlertIcon: () => dispatch(toggleCloseAlertIcon),
  goToLoginPage: () => dispatch(goToLoginPage),
  fetchCategories: () => dispatch(fetchCategories()),
  togglePublicCheckbox: () => dispatch(togglePublicCheckbox),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PublishCardContainer)