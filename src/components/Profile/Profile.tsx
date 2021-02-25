import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    state: ProfilePageType
    addPost: (messagePost: string) => void
    updateNewPostText: (newText: string) => void
}


const Profile: React.FC<ProfilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts addPost={props.addPost}
                     updateNewPostText={props.updateNewPostText}
                     newPostText={props.state.newPostText}
                     posts={props.state.posts}/>
        </div>
    );
};

export default Profile;