import React from 'react';
import {NavLink} from 'react-router-dom';
//@ts-ignore
import logo from '../img/carrot.svg';
//@ts-ignore
import s from './Header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/authReducer";
import {RootStateType} from "../../redux/store";

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    isAuth: boolean
    login: string
}
type MapDispatchPropsType = {
    getAuthUserData: () => void,
}
type PropsType = OwnPropsType

class HeaderContainer extends React.Component<PropsType> {
    componentDidMount() {
        this.props.getAuthUserData()
        // headerApi.authMe().then(response => {
        //         if (response.resultCode === 0) {
        //             let {id, login, email} = response.data;
        //             this.props.setAuthUserData(id, login, email)
        //         }
        //     })
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

const mstp = (state: RootStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mstp, {getAuthUserData})(HeaderContainer);