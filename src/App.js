import React from 'react';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Navbar from './componets/Navbar/Navbar';
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import {Route} from 'react-router-dom';
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";


const App = () => {
    return (


        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>

            <Route path='/profile/:userId?'
                   render={() => <ProfileContainer/>}/>


            <Route path='/dialogs'
                   render={() => <DialogsContainer />}/>
            <Route path='/news'
                   render={() => <News/>}/>
            <Route path='/music'
                   render={() => <Music/>}/>
            <Route path='/settings'
                   render={() => <Settings/>}/>
            <Route path='/users'
                   render={() => <UsersContainer/>}/>

            <Route path='/login'
                   render={() => <Login />}/>

        </div>


    );
}

export default App;
