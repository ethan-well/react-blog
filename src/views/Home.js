import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import ArticleList from './ArticleList';
import Index from '../layouts/Index';
import SiderNav from '../components/SiderNav';

class Home extends Component {
  render() {
    return (
      <Index>
        <Row>
          <Col span={4}>
            <SiderNav />
          </Col>
          <Col span={4}>
          </Col>
          <Col span={16}>
            <Row>
              <Col span={24}>
                <div className="article-are">
                  <Menu
                    mode="horizontal"
                    selectedKeys={['posts']}
                  >
                    <Menu.Item key='posts'>
                      <Icon type="appstore"/>最新文章列表
                    </Menu.Item>
                  </Menu>
                  <ArticleList />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Index>
    );
  }
}

export default Home;
