import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {ProfileInfoType, RootStateType} from "../../redux/store";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profileReducer";
import {compose} from "redux";


type PathParamsType = {
    userId: any  // может быть string or underfined

}
type MapStatePropsType = {
    profile: ProfileInfoType
    status: string
    authorizedUserId: any
    // isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}
type OwnPropsType = MapStatePropsType & MapDispatchPropsType
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
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

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatus}
                />
            </div>
        );
    }
}

let mstp = (state: RootStateType) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mstp, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
// export default connect(mstp, {getUserProfile})(WithUrlDataContainerComponent);