import React, { ReactDOM } from 'react';
import { Layout } from 'antd';
const { Header, Content } = Layout;
import Nav from './Nav';
import UserAvatar from './UserAvatar';
import { Row, Col } from 'antd';
import Style from './post_base.scss'

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <Layout className="post">
        <Header className="header" style={{ backgroundColor: '#fff' }}>
          <Row>
            <Col span={4}></Col>
            <Col span={16}>
              header
            </Col>
            <Col span={4}></Col>
          </Row>
        </Header>
        <Content className="content">
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default Editor;
