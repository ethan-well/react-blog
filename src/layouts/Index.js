import React, { ReactDOM } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Nav from './Nav';
import UserAvatar from './UserAvatar';
import { Row, Col } from 'antd';
import Style from './base.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Layout>
        <Header className="header" style={{ backgroundColor: '#fff' }}>
          <Row>
            <Col span={4}>
            </Col>
            <Col span={16}>
              <UserAvatar/>
              <Nav/>
            </Col>
            <Col span={4}></Col>
          </Row>
        </Header>
        <Content style={{ backgroundColor: '#fff' }}>
          {this.props.children}
        </Content>
        <Footer style={{ backgroundColor: '#fff' }}>Footer</Footer>
      </Layout>
    )
  }
}

export default Index;
