import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {updateNewPostText} from './Redux/state';
import {addPost} from './Redux/state';
import {BrowserRouter} from  "react-router-dom"



export let rerenderEntireTree =(state) => (
    ReactDOM.render(
    <React.StrictMode>
        <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
    </React.StrictMode>,
    document.getElementById('root'))
);
