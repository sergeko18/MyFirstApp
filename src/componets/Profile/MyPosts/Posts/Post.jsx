import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={'https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png'}/>

            <div className={s.item}>
                {props.message}
            </div>

            <div>
                <span>{props.likesCount}</span>
            </div>

        </div>
    )
}


/*const Post = (props) => {
  return (


    <div className={s.item}>
      <img src='https://cdn.iconscout.com/icon/free/png-128/skoda-3441045-2874154.png' />
          {props.message}
        
      <div><span>Like</span> {props.likesCount} </div>

    </div>
  )






}*/

export default Post;