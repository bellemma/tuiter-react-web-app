const PostSummaryListItem = ({
  post = {
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
      <li className="list-group-item">
        <div className="row align-items-center">
          <div className="col-10 align-items-top">
            <div className="text-secondary">
              {post.topic}
            </div>
            {post.userName}
            <i className="bi bi-check-circle-fill"/>
            <div className="text-secondary d-inline">
              - {post.time}
            </div>
            <br/>
              {post.title}
          </div>
          <div className="col-2 ">
            <img className="rounded" src={`../images/${post.image}`} width={`100%`} alt={`{post.topic}`}/>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryListItem;