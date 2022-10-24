import React from "react";
import postArray from "./posts.json"
import PostSummaryListItem from "./post-summary-list-item";

const PostSummaryList = () => {
  return(
      <ul className="list-group">
        {
          postArray.map(post =>
              <PostSummaryListItem
                  key={post._id}
                  post={post}/>
          )
        }
      </ul>
  );
};

export default PostSummaryList;
