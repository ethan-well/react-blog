import React from 'react';
import { List, Avatar, Icon } from 'antd';
import * as HttpHandler from '../conserns/HttpHandler';

class ArticleList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      listData: {},
    }
  }

  componentWillMount(){
    const url = 'http://localhost:3000/api/articles';
    HttpHandler.GetHandler(url, this.callback);
  }

  callback = (data) => {
    this.setState({listData: data});
  }

  render(){
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );

    return(
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          pageSize: 5,
        }}
        dataSource={this.state.listData}
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[<IconText type="star-o" text={item.collection_count} />, <IconText type="like-o" text={item.love_count} />, <IconText type="message" text={item.comment_count} />]}
            extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
          >
            <a href={`/post_show/${item.id}`}>
              <List.Item.Meta
                title={item.title}
                description={item.content.substr(1,150)}
              />
            </a>
          </List.Item>
        )}
      />
    )
  }
}

export default ArticleList;
