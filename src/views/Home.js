import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import ArticleList from '../components/ArticleList';
import Index from '../layouts/Index';
import SiderNav from '../components/SiderNav';

class Home extends Component {
  render() {
    return (
      <Index>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={4}>
            <SiderNav />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <div className="article-area">
                  {/* <ArticleList /> */}
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
      </Index>
    );
  }
}

export default Home;
