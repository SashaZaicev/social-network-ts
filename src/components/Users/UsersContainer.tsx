import React from 'react';
import s from './Users.module.css'
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/store";
import {followAC, setUserAC, unfollowAC} from "../../redux/usersReducer";

let mStp = (state: RootStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mDtp = (dispatch: any) => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: any) => {
            dispatch(setUserAC(users))
        }
    }
}


export default connect(mStp, mDtp)(Users);