import React, { ReactDOM } from 'react';
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import Nav from './Nav';
import UserAvatar from './UserAvatar';
import { Row, Col } from 'antd';

class Fram extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Layout>
        <Header style={{ backgroundColor: '#ffffff' }}>
          <Row>
            <Col span={4}>
              <UserAvatar/>
            </Col>
            <Col span={20}>
              <Nav/>
            </Col>
          </Row>
        </Header>
        <Content>
          {this.props.children}
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    )
  }
}

export default Fram;
