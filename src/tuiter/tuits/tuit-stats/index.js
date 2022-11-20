import {updateTuitThunk} from "../../../services/tuits-thunks";
import {useDispatch} from "react-redux";

const TuitStats = ({
  tuit = {
    "_id": Number,
    "topic": String,
    "userName": String,
    "title": String,
    "time": String,
    "image": String,
    "tweets": String,
    // disliked: false
  }
}) => {const dispatch = useDispatch();
  return(
        <div className="row align-items-center mt-2">
          <div className="col-2">
            <i className="bi bi-chat"/>
              {' ' + tuit.replies}
          </div>
          <div className="col-2">
            <i className="bi bi-arrow-repeat"/>
            {' ' + tuit.retuits}
          </div>
          <div className="col-2">
            <i onClick={() => {
              if (!tuit.liked) {
                dispatch(updateTuitThunk({
              ...tuit,
              liked: true,
              likes: tuit.likes + 1 }))}
            else {
                dispatch(updateTuitThunk({
                  ...tuit,
                  liked: false,
                  likes: tuit.likes - 1 }))
              }}} className={`bi bi-heart${tuit.liked === true ? '-fill text-danger' : ''}`}/>
            {' ' + tuit.likes}
          </div>
          <div className="col-2">
            <i onClick={() => {
              if (!tuit.disliked) {
                dispatch(updateTuitThunk({
                  ...tuit,
                  disliked: true,
                  dislikes: tuit.dislikes + 1 }))}
              else {
                dispatch(updateTuitThunk({
                  ...tuit,
                  disliked: false,
                  dislikes: tuit.dislikes - 1 }))
              }}} className={`bi bi-hand-thumbs-down${tuit.disliked === true ? '-fill' : ''}`}/>
            {' ' + tuit.dislikes}
          </div>
          <div className="col-4">
            <i className="bi bi-send"/>
          </div>
        </div>
  );
};
export default TuitStats;