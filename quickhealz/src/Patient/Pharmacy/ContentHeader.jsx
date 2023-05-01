import React from 'react';
import {Space} from "antd";

const ContentHeader = ({title, buttons = <React.Fragment />}) =>{
  const renderButtons = () => {
    if(Array.isArray(buttons)) {
      return (
        buttons.map((button, index) =>{
          return <div key={index}>
            {button}
          </div>;
        })
      )
    } else {
      return buttons;
    }
  }
  return (
    <div className="content-header">
      <span className="ch">
        <h1>{title}</h1>
      </span>
      <span className="ch">
        <Space>
          {renderButtons()}
        </Space>
      </span>
    </div>
  )
};

export default ContentHeader;
