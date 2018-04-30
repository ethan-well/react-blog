import React from 'react';
import { Menu, Card } from 'antd';

class ArticleNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_key: 'Javscript'
    }
    this.onTabChange = this.onTabChange.bind(this);
  }

  onTabChange = (key) => {
    this.setState({ current_key: key });
  }

  render(){
    const tabListNoTitle = [{
      key: 'Javscript',
      tab: 'Javscript',
    }, {
      key: 'Ruby',
      tab: 'Ruby',
    }, {
      key: 'Linux',
      tab: 'Linux',
    }];

    const contentListNoTitle = {
      Javscript: <p>Javscript content</p>,
      Ruby: <p>Ruby content</p>,
      Linux: <p>Linux content</p>,
    };

  return(
    <Card
        style={{ width: '100%' }}
        tabList={tabListNoTitle}
        activeTabKey={this.state.current_key}
        onTabChange={(key) => { this.onTabChange(key); }}
        bordered={false}
      >
      {contentListNoTitle[this.state.current_key]}
    </Card>
  )
  }
}

export default ArticleNav;
