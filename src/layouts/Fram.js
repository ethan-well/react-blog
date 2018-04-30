import React, { ReactDOM } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Nav from './Nav';
import UserAvatar from './UserAvatar';
import { Row, Col } from 'antd';
import Style from './base.css';

class Fram extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Layout>
        <Header style={{ backgroundColor: '#fff' }}>
          <Row>
            <Col span={4}>
              <UserAvatar/>
            </Col>
            <Col span={20}>
              <Nav/>
            </Col>
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

export default Fram;
