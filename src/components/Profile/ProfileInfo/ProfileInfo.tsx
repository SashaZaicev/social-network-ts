import style from "../ProfileInfo/ProfileInfo.module.css";
import photoUser from "../../img/nullPhoto.png"
import img1 from "../../img/gold1.jpg";
import {Preloader} from "../../../common/Preloader/Preloader";
import {ProfileInfoType} from "../../../redux/store";
import {ProfileStatusWithHooks} from "./ProfileStatusWithHooks";
import {ChangeEvent, FC} from "react";

export type ProfilePropsType = {
  profile: ProfileInfoType
  status: string
  updateStatus: (status: string) => void
  isOwner: boolean
  savePhoto: (photo: string) => void
}

export const ProfileInfo: FC<ProfilePropsType> = ({
                                                    profile,
                                                    updateStatus,
                                                    status,
                                                    isOwner,
                                                    savePhoto
                                                  }) => {
  if (!profile) {
    return <Preloader/>
  }
  let aboutMe = profile.aboutMe
  // ?
  // 'Write a little about yourself' :
  // props.profile.aboutMe;

  let accVK = profile.contacts.vk
    ?
    'Write here your account vk.com' :
    profile.contacts.vk;

  let accFacebook = profile.contacts.facebook
  // ?
  // 'Write here your account facebook.com' :
  // props.profile.contacts.facebook;

  //нужно обдумать, как кнопкой менять фото

  let newPhotoUser = profile.photos.large
    ? profile.photos.large
    : photoUser;
  const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement> | any) => {
    debugger
    if (e.target.files) {
      savePhoto(e.target.files[0])
    }
  }
  return (
    <div>
      <div>
        <img className={style.contentImg} src={img1} alt="profile page"/>
      </div>
      <div className={style.descriptionBlock}>
        <div className={style.profileBlock}>
          <div>
            {profile.fullName}
            {profile.lookingForAJob}
          </div>
          <div className={style.profileImage}>
            <div className={!isOwner && style.profileImageContainer}>
              <img src={newPhotoUser} alt="user"/>
              {!isOwner &&
              <label htmlFor="file-upload" className={style.addFileField}>
                Change PHOTO
                <input id="file-upload" title=' hello' type="file"
                       onChange={onMainPhotoSelected}
                />
              </label>}
            </div>
            {/*<ProfileStatus updateStatus={props.updateStatus} status={props.status}/>*/}
            <ProfileStatusWithHooks
              updateStatus={updateStatus}
              status={status}
            />
          </div>
        </div>
        <div className={style.profileInfo}>
          <ul>
            <li>About me: {aboutMe}</li>
            <li>VK: {accVK}</li>
            <li>Facebook: {accFacebook}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
