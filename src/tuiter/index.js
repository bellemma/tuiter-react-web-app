import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore/index.js";

function Tuiter() {
  return(
      <div>
        <div className="container">
          <Nav/>
        <div className="row">
          <div className="col-12 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            <NavigationSidebar active={"explore"}/>
          </div>
          <div
              className="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
            <ExploreComponent/>
          </div>
          <div
              className="col-12 d-sm-none d-md-none d-lg-block d-xxl-block d-xl-block col-lg-4 col-xl-4 col-xxl-4">
            <WhoToFollowList/>
          </div>
        </div>
        </div>
      </div>
  );
}
export default Tuiter;