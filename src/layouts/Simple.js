import React from 'react';
import Login from '../views/Login';
import { Row, Layout, Col} from 'antd';
const Content = Layout.Content;
import Style from './simple.scss';

class Simple extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <Layout>
        <Content className="content">
          <Row>
            <Col span={8}></Col>
            <Col span={8}>
              {this.props.children}
            </Col>
            <Col span={8}></Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Simple;
