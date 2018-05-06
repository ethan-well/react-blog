import React, { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
const { Header, Content } = Layout;
import Nav from './Nav';
import UserAvatar from './UserAvatar';
import Style from './post_base.scss'

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header_title: 'Let life be beautiful like summer flowers and death like autumn leaves'
    }
  }

  render(){
    return(
      <Layout className="post">
        <Header className="header" style={{ backgroundColor: '#fff' }}>
          <Row>
            <Col span={2}></Col>
            <Col span={18}>
              {this.state.header_title}
            </Col>
            <Col span={2}></Col>
            <Col span={2}>
              <Link to="/" title="返回主页">
                <UserAvatar />
              </Link>
            </Col>
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
