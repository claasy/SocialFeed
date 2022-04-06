import React, { useState } from 'react';




const Post = ({record}) => {
    return (
        <div className="card">
            <div className="container">
                <h4> {record.name} </h4>
                <p> {record.post} </p>
                <button></button>     
                <button></button> 
               
            </div>
        
        </div>
        )
    }
export default Post;