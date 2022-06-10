import React from 'react';

import './drop-down-item.css';

const DropDownItem = ({ title, onClick }) => {
  return (
    <div 
      className="DropDownItemContainer" 
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }
    }>
      <div id="drop-down-item">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default DropDownItem;