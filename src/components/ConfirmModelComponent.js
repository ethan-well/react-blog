import React from 'react';
import { Modal } from 'antd';

const confirmModelComponent = ({visible, handleOk, handleCancel}) => (
  <div>
    <Modal
      title='确认'
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <p>确定离开此页面？</p>
    </Modal>
  </div>
)

export default confirmModelComponent;