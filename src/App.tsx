import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';
import {Music} from './components/Music/Music';
import {News} from './components/News/News';
import {Settings} from './components/Settings/Settings';
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import WithSuspense from "./hoc/WithSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

export const PATH = {
    DIALOGS: '/dialogs',
    ERROR_404: '/404',
    LOGIN: '/login',
    PROFILE: '/profile/:userId?',
    USERS: '/users',
    MUSIC: '/music',
    NEWS: '/news',
    SETTINGS: '/settings'
}

const App = () => {

    let horizontalLine = <div className="horizontalLine"/>
    let bottomHorizontalLine = <div className="bottomHorizontalLine"/>
    let verticalLine = <div className="verticalLine"/>

    return (
        <div className="app-wrapper">
            {horizontalLine}
            <HeaderContainer/>
            <Navbar/>
            {verticalLine}
            <div className="app-wrapper-content">
                <Switch>
                    <Route exact path='/' render={
                        () => <Redirect to={PATH.PROFILE}/>
                    }/>
                    <Route path={PATH.DIALOGS} render={
                        WithSuspense(DialogsContainer)
                    }/>
                    <Route path={PATH.PROFILE} render={
                        WithSuspense(ProfileContainer)
                    }/>
                    <Route path={PATH.USERS} render={() => <UsersContainer />}/>
                    <Route path={PATH.MUSIC} render={() => <Music/>}/>
                    <Route path={PATH.NEWS} render={() => <News/>}/>
                    <Route path={PATH.SETTINGS} render={() => <Settings/>}/>
                    <Route path={PATH.LOGIN} render={() => <Login/>}/>
                    <Route path={PATH.ERROR_404} render={
                        () => <Redirect from={'*'} to={PATH.ERROR_404}/>
                    }/>
                </Switch>
            </div>
            {bottomHorizontalLine}
        </div>
    );
}
export default App;

