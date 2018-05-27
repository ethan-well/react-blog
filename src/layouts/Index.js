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
            <Col span={18}>
              <Nav/>
            </Col>
            <Col span={2}></Col>
          </Row>
        </Header>
        <Content className="content">
          {this.props.children}
        </Content>
        <Footer className="footer"></Footer>
      </Layout>
    )
  }
}

export default Index;
