import React from 'react';
import './App.css';
import Dialogs from './componets/Dialogs/Dialogs';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import {Route} from 'react-router-dom';
import UsersContainer from "./componets/Users/UsersContainer";


const App = () => {
    return (


        <div className='app-wrapper'>
            <Header/>
            <Navbar/>

            <Route path='/profile'
                   render={() => <Profile/>}/>


            <Route path='/dialogs'
                   render={() => <Dialogs/>}/>
            <Route path='/news' render={() => <News/>}/>
            <Route path='/music' render={() => <Music/>}/>
            <Route path='/settings' render={() => <Settings/>}/>

            <Route path='/users'
                   render={() => <UsersContainer/> }/>

        </div>


    );
}

export default App;
