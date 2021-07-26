import {connect} from "react-redux";
import {AppStateType} from "../../../redux/reduxStore";
import {MyPosts} from "./MyPosts";
import {addPost} from "../../../redux/reducers/profileReducer";
import {ProfilePageType} from "../../../redux/store";

type PostsPropsType = {
  profilePage: ProfilePageType
  // newPostText: any
}
let mStp = (state: AppStateType): PostsPropsType => {
  return {
    profilePage: state.profilePage,
    // newPostText: state.profilePage.newPostText
  }
}

export const MyPostsContainer = connect(mStp, {addPost})(MyPosts);
