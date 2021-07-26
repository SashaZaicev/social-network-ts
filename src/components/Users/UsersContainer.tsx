import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  setCurrentPage,
  unfollow,
  requestUsers, toggleIsFetching, setTotalUsersCount, toggleFollowingProgress
} from "../../redux/reducers/usersReducer";
import {Preloader} from "../../common/Preloader/Preloader";
import {compose} from "redux";

import {AppStateType} from "../../redux/reduxStore";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsersSelector
} from "../../redux/selectors";
import {UserType} from "../../redux/store";
import {Users} from "./Users";

type MapStatePropsType = {
  users: Array<UserType>,
  pageSize: number,
  totalUsersCount: number,
  currentPage: number,
  isFetching: boolean,
  followingInProgress: Array<number>
}
type MapDispatchPropsType = {
  follow: (userId: string) => void,
  unfollow: (userId: string) => void,
  getUsers: (currentPage: number, pageSize: number) => void,
  setCurrentPage: (pageNumber: number) => void,
  setTotalUsersCount: (totalCount: number) => void,
  toggleIsFetching: (isFetching: boolean) => void,
  toggleFollowingProgress: (isFetching: boolean, userId: string) => void
}
export type PropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber: number) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
    this.props.setCurrentPage(pageNumber)
  }

  render() {
    return <>
      {this.props.isFetching ?
        <Preloader/> : ''
      }
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

let mStp = (state: AppStateType): MapStatePropsType => {
  return {
    users: getUsersSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mStp,
    {
      follow,
      unfollow,
      getUsers: requestUsers,
      setCurrentPage,
      toggleIsFetching,
      setTotalUsersCount,
      toggleFollowingProgress
    })
)(UsersContainer)
