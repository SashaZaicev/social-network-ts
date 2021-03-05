import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    // store: ProfilePageType
    // dispatch: (action: ActionsTypes) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer
                // store={props.store}
                // newPostText={props.state.newPostText}
                // posts={props.state.posts}
                // dispatch={props.dispatch}
            />
        </div>
    );
}

export default Profile;