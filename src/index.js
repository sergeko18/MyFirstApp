import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 17 },
    {id: 2, message: 'YO!1', likesCount: 32}
];

let messagesData = [
    {id: 1, massage: 'Hello! How are you?'},
    {id: 2, massage: 'What you gonna do?'},
    {id: 3, massage: 'Yo'},
    {id: 4, massage: 'Yo'},
    {id: 5, massage: 'Yo'}
];

let dialogsData = [
    {id: 1, name: 'Serge'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Katrin'},
    {id: 4, name: 'Alex'},
    {id: 5, name: 'Ann'}
];
ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messagesData={messagesData} dialogsData={dialogsData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
