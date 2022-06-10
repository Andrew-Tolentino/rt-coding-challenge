import React from 'react';

import './response-card.css';
import ReplyIcon from '../../../assets/reply_icon.png';
import { getDateString } from '../../../utils/date.utils';
import DropDownMenu from '../drop-down-menu/drop-down-menu.component';
import DropDownItem from '../drop-down-item/drop-down-item.component';

const ResponseCard = ({
  message,
  name,
  postedDate,
  menuItems, // [{ title: string, onClick: function }]
  onIconClick
}) => {

  const CreateDropDownMenuItems = () => {
    return menuItems.map((val, index) => {
      const { title, onClick } = val;
      return (
        <DropDownItem
          key={`drop_down_menu_item_${index}`} 
          title={title}
          onClick={onClick}
        />
      );
    });

  }

  return (
    <div className="ResponseCardContainer">
      <div id="left-side-bar">
        <img 
          id="back-button" 
          src={ReplyIcon} 
          width="18px" 
          height="18px" 
          alt="reply" 
          onClick={() => {
            if (onIconClick)
              onIconClick();
          }}
        />
      </div>

      <div id="content">
        <div id="main-content">
          <p id="message">{message}</p>
          <DropDownMenu>
            {CreateDropDownMenuItems()}
          </DropDownMenu>
        </div>

        <div id="footer">
          <p>{name}</p>
          <p id="date">{getDateString(postedDate)}</p>
        </div>
      </div>
    </div>
  );
}

export default ResponseCard;