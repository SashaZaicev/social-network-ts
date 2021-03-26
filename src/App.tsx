import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login";

const App = () => {
    let horizontalLine = <div style={{
        height: '10px',
        background: 'linear-gradient(#000000, #ffd700)',
        gridArea: "q",
    }}></div>
    let verticalLine = <div style={{
        width: '10px',
        background: 'linear-gradient(to left, rgb(246 196 79), rgb(255, 215, 0))',
        gridArea: "w",
    }}></div>
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                {horizontalLine}
                <HeaderContainer/>
                <Navbar/>
                {verticalLine}
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer
                    />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer
                    />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
