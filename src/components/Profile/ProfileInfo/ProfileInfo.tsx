import React from 'react';
//@ts-ignore
import s from "../ProfileInfo/ProfileInfo.module.css";
//@ts-ignore
import photoUser from "../../img/nullPhoto.png"
//@ts-ignore
import img1 from "../../img/gold1.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileInfoType} from "../../../redux/store";

export type ProfilePropsType = {
    profile: ProfileInfoType
}

const ProfileInfo: React.FC<ProfilePropsType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let aboutMe = props.profile.aboutMe
    // ?
    // 'Write a little about yourself' :
    // props.profile.aboutMe;

    let accVK = props.profile.contacts.vk
    // ?
    // 'Write here your account vk.com' :
    // props.profile.contacts.vk;

    let accFacebook = props.profile.contacts.facebook
    // ?
    // 'Write here your account facebook.com' :
    // props.profile.contacts.facebook;

    //нужно обдумать, как кнопкой менять фото

    let newPhotoUser = props.profile.photos.large
        ? props.profile.photos.large
        : photoUser;

    return (
        <div>
            <div><img className={s.contentImg} src={img1} alt=""/></div>
            <div className={s.descriptionBlock}>
                <div className={s.profileBlock}>
                    <div>{props.profile.fullName}</div>
                    <div className={s.profileImage}>
                        <img src={newPhotoUser} alt=""/>

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