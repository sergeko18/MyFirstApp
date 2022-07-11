import React, {Component} from 'react';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import News from "./componets/News/News";
import Music from "./componets/Music/Music";
import Settings from "./componets/Settings/Settings";
import {HashRouter, BrowserRouter, Route, withRouter} from 'react-router-dom';
import UsersContainer from "./componets/Users/UsersContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./componets/common/Preloader/Preloader";
import store from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspence";


const DialogsContainer = React.lazy(() => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./componets/Profile/ProfileContainer'));


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

                <Route path='/profile/:userId?'
                       render={withSuspense(ProfileContainer)}/>


                <Route path='/dialogs'
                       render={withSuspense(DialogsContainer)}/>


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
    return (
        <HashRouter>

            <Provider store={store}>

                <AppContainer/>

            </Provider>

        </HashRouter>
    )
};

export default MainApp;