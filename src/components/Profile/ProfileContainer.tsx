import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps} from 'react-router-dom';
import {
  getStatus,
  getUserProfile,
  savePhoto,
  updateStatus
} from "../../redux/reducers/profileReducer";
import {compose} from "redux";
import {AppStateType} from "../../redux/reduxStore";
import {ProfileInfoType} from "../../redux/store";


type PathParamsType = {
  userId: string
}
type MapStatePropsType = {
  profile: ProfileInfoType
  status: string
  authorizedUserId: string
  isAuth: boolean
}
type MapDispatchPropsType = {
  getUserProfile: (userId: string) => void
  getStatus: (userId: string) => void
  updateStatus: (status: string) => void
  savePhoto: (photo: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
  refreshProfile() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <div>
        <Profile {...this.props}
                 isOwner={!!this.props.match.params.userId}
                 profile={this.props.profile}
                 status={this.props.status}
                 updateStatus={this.props.updateStatus}
                 savePhoto={this.props.savePhoto}
        />
      </div>
    );
  }
}

let mstp = (state: any):MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
  isAuth: state.auth.isAuth
})

export default compose(
  connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mstp, {
    getUserProfile,
    getStatus,
    updateStatus,
    savePhoto
  }),
)(ProfileContainer)
