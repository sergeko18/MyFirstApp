import React, {Component} from 'react';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./componets/common/Preloader/Preloader";
import store from "./Redux/redux-store";


class App extends Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (


            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>

                <Route  path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>


                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/news'
                       render={() => <News/>}/>
                <Route path='/music'
                       render={() => <Music/>}/>
                <Route path='/settings'
                       render={() => <Settings/>}/>
                <Route path='/users'
                       render={() => <UsersContainer/>}/>

                <Route path='/login'
                       render={() => <Login/>}/>

            </div>


        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

const AppContainer = compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);

const MainApp = (props) => {
    return(
        <BrowserRouter>

            <Provider store={store}>

                <AppContainer />

            </Provider>

        </BrowserRouter>
    )
};

export default MainApp;