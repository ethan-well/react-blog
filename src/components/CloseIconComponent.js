import React from 'react';
import { Icon  } from 'antd';

const CloseIconComponent = ({toggleCloseIcon}) => (
  <Icon type="close" className='close-icon'
    onClick={() => toggleCloseIcon()}
  />
)

export default CloseIconComponent;
