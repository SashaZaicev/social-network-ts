import React from 'react';
import {connect} from "react-redux";
import {FollowingInProgress, RootStateType, UsersPageType} from "../../redux/store";
import {
    follow,
    setCurrentPage,
    unfollow,
    toggleFollowingProgress,
    requestUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount, getUsers
} from "../../redux/usersSelectors";

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type MapStatePropsType = {
    users: UsersPageType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<FollowingInProgress>
}
type MapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    getUsers: (currentPage: number, pageSize: number) => void,
    setCurrentPage: (pageNumber: number) => void,
    setTotalUsersCount: (totalCount: number) => void,
    toggleIsFetching: (isFetching: boolean) => void,
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}
export type PropsType = OwnPropsType

class UsersContainer extends React.Component<PropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalItemsCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}


// let mStp = (state: RootStateType) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// }
let mStp = (state: RootStateType) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose<React.ComponentType>(
    connect(mStp,
        {
            follow,
            unfollow,
            getUsers: requestUsers,
            setCurrentPage,
            toggleFollowingProgress
        })
)(UsersContainer)