import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';

const MyPosts = () => {
    return <content className={s.content}>

    

    <div className ={s.posts}>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
        
        <Post message='Hi, how are you?' likesCount="15" />

        <Post message="It's my first post!" likesCount="20"/>

      
      
      
      
      
      </div>
    
    
    
    
    </div>

  
  </content>}



export default MyPosts;