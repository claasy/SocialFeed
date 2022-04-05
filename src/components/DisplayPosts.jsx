import React from 'react';
import Post from './Post';

const DisplayPosts = ({entries}) => {
  
    return (<ul>
        {entries.map((entry,i)=> <li><Post/></li>)}
    </ul>  );

}
 
export default DisplayPosts;


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