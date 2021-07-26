import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileInfoType} from "../../redux/store";
import {FC} from "react";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

export type ProfilePropsType = {
  profile: ProfileInfoType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photo: string) => void
}

export const Profile: FC<ProfilePropsType> = (props) => {
  return (
    <div>
      <ProfileInfo {...props}
                   profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}
                   isOwner={props.isOwner}
                   savePhoto={props.savePhoto}
      />
      <MyPostsContainer/>
    </div>
  );
};
