import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
   <div class="row align-items-center">
        <div class="col-11 position-relative">
          <input type="text" class="form-control rounded-pill align-items-center"
                 placeholder="Search Tuiter" id="search"/>
            <i class="fa-solid fa-magnifying-glass position-absolute ms-5 top-50 start-0 translate-middle"></i>
        </div>
        <div class="col-1 text-primary">
          <div class="wd-large-icon">
            <a href="#">
              <i class="fa-solid fa-gear "></i>
            </a>
          </div>
        </div>
      </div>

      <ul class="nav nav-tabs mt-2">
        <li class="nav-item">
          <a class="nav-link active" href="#">For You</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">News</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sports</a>
        </li>
        <li class="nav-item d-sm-none d-md-inline d-lg-inline d-xl-inline d-xxl-inline">
          <a class="nav-link" href="#">Entertainment</a>
        </li>
      </ul>

      <div class="position-relative">
      <img class="mt-2 img-fluid" src="../../images/starship.webp" width="100%"/>
      <h2 class="text-white position-absolute bottom-0 start-0 ms-2">Space X's Starship</h2>
      </div>
      ${PostSummaryList()}
 `);
}
export default ExploreComponent;