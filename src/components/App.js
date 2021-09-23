import React, { useState} from "react";
import video from "../data/video.js";
import VideoDetails from "./VideoDetails.js";
import Comment from "./Comment.js";



function App() {
  // console.log("Here's your data:", video);

  const [Display, DisplayUpdate] = useState(false)

  function updateDisplay(){
    return (Display ? <Comment/>: null )

  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <VideoDetails video={video}/>
      <button onClick = {
        () => {
        DisplayUpdate(Display = !Display)
        console.log(Display)
        // updateDisplay() 
      }
      }> 
      
      
      {(Display === true ? "Hide Comments" : "Show Comments")}  </button>
      (Display ? <Comment video={video}/>: null 
      {/* <Comment video={video}/> */}
      
      
    </div>

  );
}

export default App;