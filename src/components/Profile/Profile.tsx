import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/store";
import {Redirect} from "react-router-dom";

export type ProfilePropsType = {
    profile: ProfileInfoType
}


const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo {...props}
                         profile={props.profile}
            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;