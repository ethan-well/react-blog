import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Row, Col, Input} from 'antd';
import Editor from '../layouts/Editor';

class PostEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Editor>
        <div className='write-post-area'>
          <div className='title'>
              <input placeholder="文章标题" type='text' />
          </div>
          <Row className='post-content'>
            <Col span={12} className="post-editor">
              editor
            </Col>
            <Col span={12} className='post-preview'>
              preview
            </Col>
          </Row>
        </div>
      </Editor>
    )
  }
}

export default PostEditor;
