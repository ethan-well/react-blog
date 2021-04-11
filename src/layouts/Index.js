import React, { ReactDOM } from 'react';
import { Layout, Row, Col } from 'antd';
const { Footer, Content } = Layout;
import Style from './base.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Content className="content">
          {this.props.children}
        </Content>
        <Footer className="footer">
          <Row>
            <Col span={8}>
            </Col>
            <Col span={4}>
              <span>©mayihahaha. All rights reserved</span>
            </Col>
            <Col span={4}>
              <a href="http://beian.miit.gov.cn/" target="_blank">陕ICP备20007415号-1</a>
            </Col>
            <Col span={8}>
            </Col>
          </Row>
        </Footer>
      </Layout>
    )
  }
}

export default Index;
