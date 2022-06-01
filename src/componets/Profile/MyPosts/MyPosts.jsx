import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';
import PostReduxForm from "./PostForm/PostForm";


const MyPosts = (props) => {

    let PostsElements =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    let addPost = (value) =>{
        props.addPost(value.newPostElement)
    }


    return <div>
        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <PostReduxForm onSubmit={addPost}/>
                </div>

                <div>
                    {PostsElements}
                </div>
            </div>
        </div>
    </div>
}


export default MyPosts;