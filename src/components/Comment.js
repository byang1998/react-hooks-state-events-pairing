import react from "react";

function Comment({video}) {
    // console.log(video.title);

    function displayComments(comment)
    {

        // comment.log("test")
        return(
            <div id = {comment.id}>
                <h2>{comment.user}</h2>
                <p>{comment.comment}</p>
            </div>
        )

    }
  
    return (
        <div id = "comment">
            {video.comments.map(displayComments)}
        
        </div>
        // <>
        // </>
    );
  }
  
  export default Comment;