import React, { ReactDOM } from 'react';
import { Layout } from 'antd';
const { Footer, Content } = Layout;
import Style from './base.scss';

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Layout>
        <Content className="content">
          {this.props.children}
        </Content>
        <Footer className="footer"></Footer>
      </Layout>
    )
  }
}

export default Index;
