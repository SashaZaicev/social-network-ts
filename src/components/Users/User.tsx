import React from 'react';
import style from './Users.module.css';
import userPhoto from '../img/monkey.png';
import {NavLink} from 'react-router-dom';
import {UserType} from "../../redux/store";

type UserPropsType = {
  user: UserType,
  followingInProgress: Array<number>
  follow: (userId: string) => void,
  unfollow: (userId: string) => void,
}

export const User: React.FC<UserPropsType> = ({
                                                user,
                                                followingInProgress,
                                                unfollow,
                                                follow
                                              }) => {
  return (
    <div>
      <span>
        <div>
          <NavLink to={'/profile/' + user.userId}>
            <img
              style={{
                width: '100px',
                height: '100px',
              }}
              src={user.photos.small != null ?
                user.photos.small
                : userPhoto} alt=""/>
          </NavLink>
        </div>
        <div>
          {
            user.followed
              ? <button
                disabled={followingInProgress.some(
                  id => String(id) === user.userId)}
                className={style.btnFollow} onClick={() => {
                unfollow(user.userId)
              }}>Unfollow</button>
              :
              <button
                disabled={followingInProgress.some(
                  id => String(id) === user.userId)}
                className={style.btnUnfollow} onClick={() => {
                follow(user.userId)
              }}>Follow</button>
          }
        </div>
      </span>
      <span>
        <div>{user.fullName}</div>
        <div>{user.status}</div>
      </span>
      <span>
        <div>{'u.location.country'}</div>
        <div>{'u.location.city'}</div>
      </span>
    </div>
  );
};
