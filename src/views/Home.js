import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import ArticleList from './ArticleList';
import ArticleNav from './ArticleNav';
import Index from '../layouts/Index';

class Home extends Component {
  render() {
    return (
      <Index>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={18}>
            <Row>
              <Col span={16}>
                <div className="article-are">
                  <Menu
                    mode="horizontal"
                    selectedKeys={['posts']}
                  >
                    <Menu.Item key='posts'>
                      <Icon type="appstore"/>文章列表
                    </Menu.Item>
                  </Menu>
                  <ArticleList />
                </div>
              </Col>
              <Col span={8}>
                <div className='article-nav'>
                  <ArticleNav />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={2}></Col>
        </Row>
      </Index>
    );
  }
}

export default Home;
