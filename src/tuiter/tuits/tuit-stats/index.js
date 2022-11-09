const TuitStats = ({
  tuit = {
    "_id": Number,
    "topic": String,
    "userName": String,
    "title": String,
    "time": String,
    "image": String,
    "tweets": String
  }
}) => {
  return(
        <div className="row align-items-center mt-2">
          <div className="col-3">
            <i className="bi bi-chat"/>
              {' ' + tuit.replies}
          </div>
          <div className="col-3">
            <i className="bi bi-arrow-repeat"/>
            {' ' + tuit.retuits}
          </div>
          <div className="col-3">
            <i className={`bi bi-heart${tuit.liked === true ? '-fill text-danger' : ''}`}/>
            {' ' + tuit.likes}
          </div>
          <div className="col-3">
            <i className="bi bi-send"/>
          </div>
        </div>
  );
};
export default TuitStats;