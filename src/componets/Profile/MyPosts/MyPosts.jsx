import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';



const MyPosts = (props) => {


     let PostsElements =
         props.posts.map (p => <Post message={p.message} id={p.id} likesCount ={p.likesCount} />);

     let newPostElement = React.createRef();


     let addPost = () => {
         let text = newPostElement.current.value;
         alert(text);
     }


    return <div>


        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea ref = {newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                    <button>Remove</button>
                </div>

                {PostsElements}



            </div>


        </div>


    </div>
}


export default MyPosts;