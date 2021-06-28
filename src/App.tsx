import './App.css';
import Navbar from "./components/Navbar/Navbar";
import React from 'react';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UsersContainer from "./components/Users/UsersContainer";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/appReducer";
import store, {AppStateType} from "./redux/reduxStore";
import {compose} from "redux";


class App extends React.Component<AppStateType> {
    componentDidMount() {
        initializeApp()
    }

    render() {
        let horizontalLine = <div className="horizontalLine"/>
        let verticalLine = <div className="verticalLine"/>
        // if (!this.props.initialized) {
        //     return <Preloader/>
        // }

        return (
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
        );
    }
}

const mstp = (state: AppStateType) => ({
    initialized: state.app.initialized
})

let AppContainer = compose(withRouter, connect(mstp, {initializeApp}))(App);

const JSApp = (props:any) => {
    return (<BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>)
}
export default JSApp;
