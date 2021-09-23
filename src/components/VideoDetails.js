import react, {useState} from "react";
import Likes from "./Likes";


function VideoDetails({video}) {
   // console.log(video.views);
    const [upVote, updateUpVote] = useState(video.upvotes)
    const [downVote, updateDownVote] = useState(video.downvotes)
    console.log(video.title);

    return (
        
    <div>
        
        <h1>{video.title}</h1>
        <p>views: {video.views} | uploaded {video.createdAt}</p>

       <p> <button onClick = {() => updateUpVote (upVote + 1)}>
             {upVote}👍
        </button> 
        <button onClick = {() => updateDownVote (downVote + 1)}>
            {downVote}👎
        </button></p>
    </div>
     
        
      
    );
  }
  
  export default VideoDetails;