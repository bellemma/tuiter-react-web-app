import PostSummaryList from "../post-summary-list";
import "./index.css";

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
            <a href="#">
              <i className="bi bi-gear-fill"/>
            </a>
          </div>
        </div>
      </div>

      <ul className="nav nav-tabs mt-2">
        <li className="nav-item">
          <a className="nav-link active" href="#">For You</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Trending</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">News</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sports</a>
        </li>
        <li className="nav-item d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
          <a className="nav-link" href="#">Entertainment</a>
        </li>
      </ul>

      <div className="position-relative">
      <img className="mt-2 img-fluid" src={`../images/starship.webp`} width="100%"/>
      <h2 className="text-white position-absolute bottom-0 start-0 ms-2">Space X's Starship</h2>
      </div>
      <PostSummaryList/>
      </>
 );
}
export default ExploreComponent;