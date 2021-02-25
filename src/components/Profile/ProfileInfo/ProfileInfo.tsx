import React from 'react';
import s from "../ProfileInfo/ProfileInfo.module.css";
import img1 from "../../img/gold1.jpg";

const ProfileInfo = () => {
    return (
        <div>
            <div><img className={s.contentImg} src={img1} alt=""/></div>
            <div className={s.descriptionBlock}>ava + description</div>
        </div>
    );
};

export default ProfileInfo;