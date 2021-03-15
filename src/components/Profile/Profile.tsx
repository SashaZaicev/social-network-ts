import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/store";
import {PropsType} from "./ProfileContainer";

type ProfilePropsType = {
    profile: null
}


const Profile: React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;