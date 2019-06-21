import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import Index from '../layouts/Index';
import SideNav from '../components/SideNavComponent';
import MainContentContainer from '../containers/mainContentContainer';
import ArticleContainer from '../containers/AlertContainer';


class HomeView extends Component {
  render() {
    return (
      <Index>
        <Row>
          <Col span={4}>
          </Col>
          <Col span={4}>
            <SideNav />
          </Col>
          <Col span={12}>
            <Row>
              <Col span={24}>
                <div className="article-area">
                  <MainContentContainer />
                </div>
              </Col>
            </Row>
          </Col>
          <Col span={4}>
          </Col>
        </Row>
        <ArticleContainer />
      </Index>
    );
  }
}

export default HomeView;
