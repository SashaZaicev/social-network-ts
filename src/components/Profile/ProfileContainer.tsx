import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {RootStateType} from "../../redux/store";

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PathParamsType = {
    userId: string
}
type MapStatePropsType = {
    profile: null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: null) => void
}
export type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = '2'
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}

let mstp = (state: RootStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mstp, {setUserProfile})(WithUrlDataContainerComponent);