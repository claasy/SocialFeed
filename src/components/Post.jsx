import React, { useState } from 'react';
import '../App.css';




const Post = ({record}) => {
    return (
        <div className="card">
            <div className="container">
                <h4> {record.name} </h4>
                <p> {record.post} </p>
                <button>Like</button>   
                <button>Dislike</button>
            </div>
        </div>
        )
    }

                 
               
export default Post;