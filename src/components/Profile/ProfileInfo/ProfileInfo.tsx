import React from 'react';
// @ts-ignore
import s from "../ProfileInfo/ProfileInfo.module.css";
// @ts-ignore
import img1 from "../../img/gold1.jpg";
import Preloader from "../../../common/Preloader/Preloader";
import {ProfileInfoType} from "../../../redux/store";

// type ProfilePropsType = {
//     profile: string
//     // aboutMe: string
//     // contacts: {facebook: "facebook.com", website: null, vk: "vk.com/dimych", twitter: "https://twitter.com/@sdf", instagram: "instagra.com/sds", …}
//     // fullName: "samurai dimych"
//     // lookingForAJob: true
//     // lookingForAJobDescription: "не ищу, а дурачусь"
//     // photos: {small: "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0", large: "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"}
//     // userId: 2
// }

const ProfileInfo: React.FC<ProfileInfoType> = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }
    let aboutMe = !props.profile.aboutMe ?
        'Write a little about yourself' :
        props.profile.aboutMe

    let accVK = !props.profile.contacts.vk ?
        'Write here your account vk.com' :
        props.profile.contacts.vk

    let accFacebook = !props.profile.contacts.facebook ?
        'Write here your account facebook.com' :
        props.profile.contacts.facebook


    return (
        <div>
            <div><img className={s.contentImg} src={img1} alt=""/></div>
            <div className={s.descriptionBlock}>
                <div className={s.profileBlock}>
                    <div>{props.profile.fullName}</div>
                    <div><img src={props.profile.photos.large} alt=""/>
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