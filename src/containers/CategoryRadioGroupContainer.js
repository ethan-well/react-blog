import React from 'react';
import { connet } from 'react-redux';
import { RadioButton } from 'antd';

class CategoryRadioGroupContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    return (
      <div>
        <p className="custom-margin">选择分类</p>
        <div style={{ marginTop: 6, marginBottom: 16 }}>
          <RadioGroup defaultValue={this.state.category} onChange={this.categoryHandleChange}>
            {
              this.state.categories.map((item) => { return <RadioButton key={item.id} value={item.id}>{item.name}</RadioButton> } )
            }
          </RadioGroup>
        </div>
      </div>
    )
  }
}



