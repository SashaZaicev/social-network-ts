import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {connect} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import Preloader from "./common/Preloader/Preloader";



class App extends React.Component {
    componentDidMount() {
       this.props.initializeApp()
    }

    render() {
        let horizontalLine = <div className="horizontalLine"/>
        let verticalLine = <div className="verticalLine"/>
        if (!this.props.initialized) {
            return <Preloader/>
        }

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
}

const mstp = (state: any) => ({
    initialized: state.app.initialized
})

export default connect(mstp, {initializeApp})(App);
