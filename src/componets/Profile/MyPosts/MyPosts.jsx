import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';



const MyPosts = (props) => {
     /*let posts = [
         {id: 1, message: 'Hi, how are you?', likesCount: 17 },
         {id: 2, message: 'YO!1', likesCount: 32}
     ];*/

     let PostsElements =
         props.posts.map (p => <Post message={p.message} id={p.id} likesCount ={p.likesCount} />);

    return <div>


        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                    <button>Remove</button>
                </div>

                {PostsElements}

                {/*<Post message='Hi, how are you?' likesCount="15"/>

                <Post message="It's my first post!" likesCount="20"/>*/}


            </div>


        </div>


    </div>
}


export default MyPosts;