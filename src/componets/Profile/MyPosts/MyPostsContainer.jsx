import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }


    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    };

    return (<MyPosts updateNewPostText={onPostChange}
                     addPost={addPost}
                     posts={props.store.getState().profilePage.posts}
                     newPostText = {props.store.getState().profilePage.newPostText}
    />);
}


export default MyPostsContainer;