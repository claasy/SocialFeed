import React from "react";
import Post from "./Post";

const DisplayPosts = ({ entries }) => {
  return (
    <div className="media-body">
      {entries.map((entry, index) => {
        return(
            <Post key={index} record={entry} />
        )
      })}
    </div>
  );
};

export default DisplayPosts;
