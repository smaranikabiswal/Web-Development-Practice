import { useState } from "react"
import CommentsForm from "./CommentsForm.jsx"
export default function Comment(){
    let [comments,setComments]=useState([{
        username:"@sk",
        remarks:"great job!",
        rating:4
    }]);
    let addNewComment=(comment)=>{
        setComments((currComments)=>[...currComments,comment]);
    }
    return (
  <>
    <div>
      <h1>All Comments</h1>
      {/* Map over the array to display each comment */}
      {comments.map((comment, index) => (
        <div key={index} className="comment">
          <span>{comment.remarks}</span> &nbsp;
          <span>(rating={comment.rating})</span> &nbsp;
          <p>- {comment.username}</p> &nbsp;
          <hr />
        </div>
      ))}
    </div>
    <hr />
    <CommentsForm addNewComment={addNewComment} />
  </>
);
}