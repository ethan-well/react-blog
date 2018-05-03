import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Row, Col} from 'antd';
import Editor from '../layouts/Editor';

const input = '# This is a header\n\nAnd this is a paragraph'

class CreateBlog extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <Editor>
        <div className='write-post-area'>
          <Row className='title'>
            <Col>Title</Col>
          </Row>
          <Row className='content'>
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

export default Editor;
