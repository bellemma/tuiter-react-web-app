import React from "react";

const NavigationSidebar = (
    {
      active = 'explore'
    }
) => {
  return (
      <div className="list-group">
        <a href={"#"} className="list-group-item">
          <i className="bi bi-twitter"/>
          Tuiter</a>
        <a href={"#"} className={`list-group-item
                    ${active === 'home'?'active':''}`}>
          <i className="bi bi-house-door-fill"/>
          Home
        </a>
        <a href={"#"} className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
          <i className="bi bi-hash"/>
          Explore
        </a>
        <a href={"#"} className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          <i className="bi bi-bell-fill"/>
          Notifications
        </a>
        <a href={"#"} className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          <i className="bi bi-envelope-fill"/>
          Messages
        </a>
        <a href={"#"} className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <i className="bi bi-bookmark-fill"/>
          Bookmarks
        </a>
        <a href={"#"} className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <i className="bi bi-list"/>
          Lists
        </a>
        <a href={"#"} className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <i className="bi bi-person-fill"/>
          Profile
        </a>
        <a href={"#"} className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <i className="bi bi-three-dots"/>
           More
        </a>
      </div>
  );
};
export default NavigationSidebar;