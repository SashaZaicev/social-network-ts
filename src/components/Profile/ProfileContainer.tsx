import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Redirect, RouteComponentProps, withRouter} from 'react-router-dom';
import {ProfileInfoType, RootStateType} from "../../redux/store";
import {getUserProfile} from "../../redux/profileReducer";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: number
}
type MapStatePropsType = {
    profile: ProfileInfoType
    isAuth: boolean
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
    // setUserProfile: (response: ProfileInfoType) => void
}
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
        // profileApi.authUser(userId).then((response) => {
        //     this.props.setUserProfile(response)
        // })
    }

    render() {

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                />
            </div>
        );
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

//     (props:any) => {
//     if (!props.isAuth) return <Redirect to={"/login"}/>
//     return <ProfileContainer {...props}/>
// }

let mstp = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mstp, {getUserProfile})(WithUrlDataContainerComponent);