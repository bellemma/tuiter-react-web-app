import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList";
import ExploreComponent from "../ExploreComponent/ExploreComponent.js";



function exploreComponent() {
  console.log("hello");

  $('#wd-explore').append(` 
          <div class="row">
              <div class="col-12 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    ${NavigationSidebar()}
              </div>
              <div class="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                    ${ExploreComponent()}
              </div>
              <div class="col-12 d-sm-none d-md-none d-lg-block d-xxl-block d-xl-block col-lg-4 col-xl-4 col-xxl-4">
                     ${WhoToFollowList()}
              </div>
          </div>
   `);
}

$(exploreComponent);