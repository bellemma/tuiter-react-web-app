import PostSummaryList from "../post-summary-list";
import "./index.css";
import {Link} from "react-router-dom";

const ExploreComponent = () => {
  return(
      <>
   <div className="row align-items-center">
        <div className="col-11 position-relative">
          <input type="text" className="form-control rounded-pill align-items-center"
                 placeholder="Search Tuiter" id="search"/>
          <i className="bi bi-search position-absolute ms-5 top-50 start-0 translate-middle"/>
        </div>
        <div className="col-1 text-primary">
          <div className="wd-large-icon">
            <Link to="#">
              <i className="bi bi-gear-fill"/>
            </Link>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs mt-2">
        <li className="nav-item">
          <Link className="nav-link active" to="#">For You</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Trending</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">News</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Sports</Link>
        </li>
        <li className="nav-item d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
          <Link className="nav-link" to="#">Entertainment</Link>
        </li>
      </ul>

      <div className="position-relative">
      <img className="mt-2 img-fluid" src={`../images/starship.webp`} width="100%" alt={`Starship`}/>
      <h2 className="text-white position-absolute bottom-0 start-0 ms-2">Space X's Starship</h2>
      </div>
      <PostSummaryList/>
      </>
 );
}
export default ExploreComponent;