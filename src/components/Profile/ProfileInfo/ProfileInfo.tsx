import React from 'react';
//@ts-ignore
import s from "../ProfileInfo/ProfileInfo.module.css";
//@ts-ignore
import photoUser from "../../img/nullPhoto.png"
//@ts-ignore
import img1 from "../../img/gold1.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileInfoType} from "../../../redux/store";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

export type ProfilePropsType = {
    profile: ProfileInfoType
    status: string
    updateStatus: (status: string) => void
}

const ProfileInfo: React.FC<ProfilePropsType> = ({profile, updateStatus, status}) => {
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

    return (
        <div>
            <div><img className={s.contentImg} src={img1} alt=""/></div>
            <div className={s.descriptionBlock}>
                <div className={s.profileBlock}>
                    <div>{profile.fullName}
                        {profile.lookingForAJob}</div>
                    <div className={s.profileImage}>
                        <img src={newPhotoUser} alt=""/>
                        {/*<ProfileStatus updateStatus={props.updateStatus} status={props.status}/>*/}
                        <ProfileStatusWithHooks updateStatus={updateStatus} status={status}/>
                    </div>
                </div>
                <div className={s.profileInfo}>
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

export default ProfileInfo;