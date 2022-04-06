import React from "react"
import Post from "./Post";

const DisplayPosts = ({entries}) => {
  
    return (
        <div className="media-body"> 
        {entries.map((entry, index) => {
            console.log("Entry: ", entry);
            <Post key={index} record={entry} />
        })}    
        </div>
);
}

export default DisplayPosts;

// return (
    // <><h4 class="media-heading">{entry.name}</h4><div>{entry.post}</div></>
    // ); 

{/* 
<div>
    <nav>
        ({SocialFeed})
    </nav>
    <form>
    </form>
    <DisplayPosts>
        <posts>
        </posts>
    </DisplayPosts>
</div> */}