import React, { useState } from 'react';




const Post = ({record}) => {
    return (
        <div className="card">
            <div className="container">
                <h4> {record.name} </h4>
                <p> {record.post} </p>
                <button>Submit</button>     
                <button>I Like Amanda</button>   
            </div>
        
        </div>
        )
{/*     
    const Switch = () => {
        return(
            <>
            
                <input
                    className="react-switch-checkbox"
                    id={`react-switch-new`}
                    type="checkbox"
                />
                <label
                    className="react-switch-label"
                    htmlFor={`react-switch-new`}
                >
                    <span className={`react-switch-button`} />
                </label>
            </>
     ); */}
};
 
export default Post;