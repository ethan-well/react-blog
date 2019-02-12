import React from 'react';
import {Row, Col, Icon} from 'antd';
import Editor from '../layouts/Editor';
import CloseIconContainer from '../containers/CloseIconContainer';
import ConfirmModelContainer from '../containers/ConfirmModelContainer';
import TitleInputContainer from '../containers/TitleInputContainer';
import ContentTextareaContainer from '../containers/ContentTextareaContainer';
import ContentMarkdownContainer from '../containers/ContentMarkdownContainer';
import PublishCardContainer from '../containers/PublishCardContainer';
import PublishIconContainer from '../containers/PublishIconContainer';

class NewArticle extends React.Component {
  constructor(props) {
    super(props);
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
              <PublishIconContainer />
              <PublishCardContainer />
            </Col>
          </Row>
          <Row className='post-content'>
            <Col span={12} className="post-editor">
              <ContentTextareaContainer />
            </Col>
            <Col span={12} className='post-preview'>
              <ContentMarkdownContainer />
            </Col>
          </Row>
        </div>
      </Editor>
    );
  }
}

export default NewArticle;
