import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitsListItem = ({
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
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-2">
            <img className="rounded" src={`../images/${tuit.image}`} width={`100%`} alt={`{tuit.topic}`}/>
          </div>
          <div className="col-10 align-items-top">
            <i className="bi bi-x-lg float-end"
               onClick={() => deleteTuitHandler(tuit._id)}/>
            {tuit.userName + ' '}
            <i className="bi bi-check-circle-fill"/>
            {' ' + tuit.handle + ' '}
            <div className="text-secondary d-inline">
              - {' ' + tuit.time}
            </div>
            <br/>
            {tuit.tuit}
            <br/>
            <TuitStats key={tuit._id} tuit={tuit}/>
          </div>
        </div>
      </li>
  );
};
export default TuitsListItem;