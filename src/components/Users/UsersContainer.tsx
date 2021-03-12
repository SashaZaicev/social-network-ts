import React from 'react';
// import s from './Users.module.css'
import {connect} from "react-redux";
import Users from "./Users";
import {RootStateType} from "../../redux/store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "../../redux/usersReducer";

let mStp = (state: RootStateType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
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
        },
        setCurrentPage: (page: any) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsersCount: (totalCount: any) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}


export default connect(mStp, mDtp)(Users);