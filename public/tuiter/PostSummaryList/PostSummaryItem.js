const PostSummaryItem = (post) => {
  return (`
  <li class="list-group-item">
     <div class="row align-items-center">
            <div class="col-10 align-items-top text-white">
              <div class="text-secondary">
                ${post.topic}
              </div>
              ${post.userName} <i class="fa-solid fa-circle-check d-inline"></i>
              <div class="text-secondary d-inline">
                - ${post.time}
              </div><br>
              ${post.title}
            </div>
            <div class="col-2 ">
              <img class="rounded" src="${post.image}" width="100%"/>
            </div>
          </div>
   </li>
 `);
}
export default PostSummaryItem;