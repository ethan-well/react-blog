import React, { Component } from 'react';
import { Row, Col } from 'antd';

class Home extends Component {
  render() {
    return (
      <Row>
        <Col span={4}>
        </Col>
        <Col span={18}>
          Home
        </Col>
        <Col span={4}></Col>
      </Row>
    );
  }
}

export default Home;
