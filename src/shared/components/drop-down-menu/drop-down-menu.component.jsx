import React, { useState, useRef, useEffect  } from 'react';

import './drop-down-menu.css';
import EllipsesIcon from '../../../assets/ellipses_icon.png';

const DropDownMenu = ({ children }) => {
  const ref = useRef();
  const [showElements, setShowElements] = useState(false);

  useEffect(() => {
    const checkForOutsideclick = (event) => {
      if (!ref.current.contains(event.target)) {
        setShowElements(false);
      }
    }

    document.addEventListener('mousedown', checkForOutsideclick);

    return () => document.removeEventListener('mousedown', checkForOutsideclick);
  }, []);
  
  return (
    <div ref={ref}>
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