import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore/index.js";
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import HomeComponent from "./home";
import {Route, Routes} from "react-router";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});


function Tuiter() {
  return(
      <Provider store={store}>
      <div>
        <div className="container">
          <Nav/>
        <div className="row">
          <div className="col-12 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
            <NavigationSidebar active="explore"/>
          </div>
          <div
              className="col-12 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
            <Routes>
              <Route index element={<HomeComponent/>}/>
              <Route path="explore" element={<ExploreComponent/>}/>
            </Routes>
          </div>
          <div
              className="col-12 d-sm-none d-md-none d-lg-block d-xxl-block d-xl-block col-lg-4 col-xl-4 col-xxl-4">
            <WhoToFollowList/>
          </div>
        </div>
        </div>
      </div>
      </Provider>
  );
}
export default Tuiter;