import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {ActionsTypes, StoreType} from './redux/state'

type PropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<PropsType> = (props) => {
    const state = props.store.getState();
    let dialogsPages = state.dialogsPage
    let profilesPages = state.profilePage
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
                <Header/>
                <Navbar/>
                {verticalLine}
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs
                        sendMessage={props.store.sendMessages}
                        state={dialogsPages}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        dispatch={props.dispatch}
                        state = {profilesPages}
                    />}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
