import React, { ReactDOM } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
const { Header, Content } = Layout;
import Style from './post_base.scss';

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
        <Content className="content">
          {this.props.children}
        </Content>
      </Layout>
    )
  }
}

export default Editor;
