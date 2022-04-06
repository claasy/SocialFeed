

const DisplayPosts = ({entries}) => {
  
    return (
        <div class="media-body"> 
        {entries.map((entry) => {
            return (
            <><h4 class="media-heading">{entry.name}</h4><div>{entry.post}</div></>
            );  
        
        })}    
        </div>
);
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