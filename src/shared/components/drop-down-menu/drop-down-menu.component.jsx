import React, { useState } from 'react';

import './drop-down-menu.css';
import EllipsesIcon from '../../../assets/ellipses_icon.png';

const DropDownMenu = ({ children }) => {
  const [showElements, setShowElements] = useState(false);
  
  return (
    <div>
      <img 
        id="drop-down-button"
        src={EllipsesIcon} 
        width="20px" 
        height="20px" 
        alt="options"
        onClick={() => setShowElements(!showElements)}
      />

      {showElements 
        && 
      <div id="drop-down-items-container">
        {children}
      </div>
      }
    </div>
  );
}


export default DropDownMenu;