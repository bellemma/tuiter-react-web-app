const WhoToFollowListItem = ({
      who = {"_id": Number, "avatarIcon": String, "userName": String, "handle": String}
    }
) => {
  return(
  <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-2">
              <img className="rounded-circle" src={`../images/${who.avatarIcon}`} width={50} alt={""}/>
            </div>
            <div className="col-6 text-nowrap">
              <b>{who.userName}</b>
              <span><i className="bi bi-check-circle-fill"/></span>
              <br/>
              @{who.handle}
            </div>
            <div className="col-4">
              <a className="btn btn-primary btn-block col-12 rounded-pill"
                 href="#">Follow</a>
            </div>
          </div>
        </li>

);
};
export default WhoToFollowListItem;