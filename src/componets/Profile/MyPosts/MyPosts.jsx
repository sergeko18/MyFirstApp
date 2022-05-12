import React from 'react';
import s from './MyPosts.module.css';
import Post from './Posts/Post';


const MyPosts = (props) => {

    let PostsElements =
        props.posts.map(p => <Post message={p.message} id={p.id} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();



    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);

    };


    return <div>
        <div className={s.posts}>
            My posts
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPostElement}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                    <button>Remove</button>
                </div>

                {PostsElements}

            </div>
        </div>
    </div>
}


export default MyPosts;