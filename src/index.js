
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from './Redux/state';
import {addPost, updateNewPostText, subscriber} from './Redux/state';
import {BrowserRouter} from  "react-router-dom"


let rerenderEntireTree =(state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </BrowserRouter>,
        document.getElementById('root'))
};


rerenderEntireTree(state);


subscriber(rerenderEntireTree);
