const NavigationSidebar = () => {
  return(`
   <div class="list-group overflow-hidden text-nowrap">
        <a href="#" class="list-group-item list-group-item-action">
          <i class="fa-brands fa-twitter"></i></a>

        <a href="../home.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-house"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Home</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action active">
          <i class="fa-solid fa-hashtag"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Explore</div>
        </a>

        <a href="../notifications.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-bell"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Notifications</div>
        </a>

        <a href="../messages.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-envelope"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Messages</div>
        </a>

        <a href="../bookmarks/index.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-bookmark"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Bookmarks</div>
        </a>

        <a href="../lists.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-list"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Lists</div>
        </a>

        <a href="../profile.html" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-user"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">Profile</div>
        </a>

        <a href="#" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-ellipsis"></i>
          <div class="d-xxl-inline d-xl-inline d-lg-none d-md-none d-sm-none">More</div>
        </a>
      </div>

      <a class="btn btn-primary col-12 rounded-pill mt-1" href="../tuit.html">Tuit</a>
 `);
}
export default NavigationSidebar;