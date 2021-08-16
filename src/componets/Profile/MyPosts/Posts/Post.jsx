import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (


    <div className={s.item}>
      <img src='http://127.0.0.1:5500/goodZone/22.07/DSC_0006.jpg' />
          {props.message}
        
      <div><span>Like</span> {props.likesCount} </div>

    </div>
  )






}

export default Post;