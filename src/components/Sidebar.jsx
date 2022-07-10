import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
const Sidebar = () => {
  const [clicked, setClicked] = useState(false);
  const handleSidebar = () => {
    setClicked(!clicked);
  };
  return (
    <div className='SidebarContainer'>
      <button onClick={handleSidebar} className='sidebarBtn'>
        <FaBars style={{ color: "#06ffb0" }} />
      </button>
      {clicked ? (
        <div className='Sidebarcontent'>
          <ul className='sidebarList'>
            <li>Notifications</li>
            <li>Purchase History</li>
            <li>Stream Library</li>
            <li>Help & Support</li>
            <li>Account & Settings</li>
            <li>Rewards</li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default Sidebar;
