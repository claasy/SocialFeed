import React from 'react';

const DisplayPosts = ({entries}) => {
  
    return (<ul>
        {entries.map((entry,i)=> <li>listItem</li>)}
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