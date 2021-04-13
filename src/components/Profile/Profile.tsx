import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/store";

export type ProfilePropsType = {
    profile: ProfileInfoType
    status: string
    updateStatus: (status: string) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo {...props}
                         profile={props.profile}
                         status={props.status}
                         updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;