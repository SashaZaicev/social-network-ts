import React from 'react';
// import {NavLink} from 'react-router-dom';
// import logo from '../img/carrot.svg';
// import s from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData, logout} from "../../redux/reducers/authReducer";
import {AppStateType} from "../../redux/reduxStore";

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean,
    login: string,
}
type MapDispatchPropsType = {
    getAuthUserData: () => void,
}
type PropsType = OwnPropsType

class HeaderContainer extends React.Component<PropsType> {

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mstp = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mstp, {getAuthUserData, logout})(HeaderContainer);
