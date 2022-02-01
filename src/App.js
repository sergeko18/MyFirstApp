import React from 'react';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import {updateNewPostText} from "./Redux/state";


const App = (props) => {
    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>

                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText = {props.updateNewPostText}
                       />}/>


                <Route path='/dialogs'
                       render={() => <Dialogs
                           messagesData={props.state.messagesPage.messagesData}
                           dialogsData={props.state.messagesPage.dialogsData}
                       />}/>
                <Route path='/news' render={() => <News/> }/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>

            </div>
        </BrowserRouter>

    );
}

export default App;
