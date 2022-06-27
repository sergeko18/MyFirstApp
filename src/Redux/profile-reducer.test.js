import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";
import React from "react";


let state1 = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 17},
        {id: 2, message: 'YO!1', likesCount: 32}
    ],
};

it ( "Length of posts should be incremented" , () => {
    // 1. test data
    let action = addPostActionCreator("I am a junior react developer!");

    // 2. action
    let newState1 = profileReducer(state1, action);
    // 3. expectation
    expect(newState1.posts.length).toBe(3);

})

it ( "Message of added post should be correct" , () => {
    // 1. test data
    let action = addPostActionCreator("I am a junior react developer!");

    // 2. action
    let newState1 = profileReducer(state1, action);
    // 3. expectation
    expect(newState1.posts[2].message).toBe('I am a junior react developer!');
})

it ( "After deleting length of messages data should be decrement" , () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState1 = profileReducer(state1, action);
    // 3. expectation
    expect(newState1.posts.length).toBe(1);
})

