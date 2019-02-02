import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Row, Col, Icon} from 'antd';
import Editor from '../layouts/Editor';
import CloseIconContainer from '../containers/CloseIconContainer';
import ConfirmModelContainer from '../containers/ConfirmModelContainer';
import TitleInputContainer from '../containers/TitleInputContainer';
import ContentTextareaContainer from '../containers/ContentTextareaContainer';

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
              <CloseIconContainer />
              <ConfirmModelContainer />
              <TitleInputContainer />
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
              <ContentTextareaContainer />
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
