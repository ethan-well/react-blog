import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Row, Col, Icon} from 'antd';
import Editor from '../layouts/Editor';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange = (e) => {
    console.log('change')
  }

  render(){
    return(
      <Editor>
        <div className='write-post-area'>
          <Row className='title-area'>
            <Col span={12} className="title">
              <Icon type="close" className='close-icon' />
              <input id="post-title" placeholder="文章标题" value='xxxxxx' onChange={this.handleChange} type='text' ref="post_title" />
            </Col>
            <Col span={12} className="operator-area">
              <a className='save-post'>
                发布
                <Icon type="caret-up" />
              </a>
            </Col>
          </Row>
          <Row className='post-content'>
            <Col span={12} className="post-editor">
             <textarea id="post_content_textarea" placeholder="开始你的创作..."  onChange={this.handleChange} value='xxxxx' />
            </Col>
            <Col span={12} className='post-preview'>
              <ReactMarkdown source={'xxxxxxxxxx'} />
            </Col>
          </Row>
        </div>
      </Editor>
    );
  }
}

export default NewArticle;
