const WhoToFollowListItem = (who) => {
  return(`
  <li class="list-group-item">
          <div class="row align-items-center">
            <div class="col-2">
              <img class="rounded-circle" src="${who.avatarIcon}" width="50px"/>
            </div>
            <div class="col-6 text-nowrap">
              <b>${who.userName}</b>
              <span><i class="fa-solid fa-circle-check"></i></span><br>
              @${who.handle}
            </div>
            <div class="col-4">
              <a class="btn btn-primary btn-block col-12 rounded-pill"
                 href="#">Follow</a>
            </div>
          </div>
        </li>
 `);
}
export default WhoToFollowListItem;