import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
  const {pathname} = useLocation();
  const paths = pathname.split('/')
  const active = paths[2];
  console.log(active)
  return (
      <div className="list-group">
        <Link to="#" className="list-group-item">
          <i className="bi bi-twitter"/>
          </Link>
        <Link to="" className={`list-group-item
                    ${active === undefined || active === '' ?'active':''}`}>
          <i className="bi bi-house-door-fill"/>
          Home
        </Link>
        <Link to="explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
          <i className="bi bi-hash"/>
          Explore
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
          <i className="bi bi-bell-fill"/>
          Notifications
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
          <i className="bi bi-envelope-fill"/>
          Messages
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
          <i className="bi bi-bookmark-fill"/>
          Bookmarks
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
          <i className="bi bi-list"/>
          Lists
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
          <i className="bi bi-person-fill"/>
          Profile
        </Link>
        <Link to="#" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
          <i className="bi bi-three-dots"/>
           More
        </Link>
      </div>
  );
};
export default NavigationSidebar;