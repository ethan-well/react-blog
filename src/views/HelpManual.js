import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Index from '../layouts/Index';

class HelpManual extends Component {
  render() {
    return (
      <Index>
        <Row>
          <Col span={4}></Col>
          <Col span={16}>
            <div className="help-manual">
              <article>
                你好，此处是想写点帮助文档给想使用本系统搭建自己博客网站的同学参考，由于目前还处于开发阶段，等功能完善后，再回来完善本页的内容！
              </article>
            </div>
          </Col>
          <Col span={4}></Col>
        </Row>
      </Index>
    )
  }
}

export default HelpManual;
