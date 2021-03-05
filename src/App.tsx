import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

// type PropsType = {
// state:AppStateType
// store: any
// dispatch: (action: ActionsTypes) => void
// }

// const App: React.FC<PropsType> = (props) => {
const App = () => {
    // const state = props.store.getState();
    // let dialogsPages = props.store.getState()dialogsPage
    // let profilesPages = props.store.profilePage
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
                    <Route path='/dialogs' render={() => <DialogsContainer
                        // dispatch={props.dispatch}
                        // store={state.dialogsPage}
                    />}/>
                    <Route path='/profile' render={() => <Profile
                        // dispatch={props.dispatch}
                        // store = {state.profilePage}
                    />}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
