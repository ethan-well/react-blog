import React, { Component } from 'react';
import {Row, Col} from 'antd';

class Detail extends Component {
  render() {
    return (
      <Row>
        <Col span={4}></Col>
        <Col span={18}>Detail</Col>
        <Col span={4}></Col>
      </Row>
    );
  }
}

export default Detail;
