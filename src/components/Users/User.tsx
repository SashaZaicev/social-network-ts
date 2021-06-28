import React from 'react';
// @ts-ignore
import st from './Users.module.css';
// @ts-ignore
import userPhoto from '../img/monkey.png';
import {NavLink} from 'react-router-dom';
import {FollowingInProgress} from "../../redux/store";

type UserPropsType = {
    user: any,
    followingInProgress: Array<FollowingInProgress>
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
}

const User: React.FC<UserPropsType> = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
                <span>
                    <div>
                        <NavLink to={'/profile/' + user.id}>
                        <img
                            style={{
                                width: '100px',
                                height: '100px',
                            }}
                            src={user.photos.small != null ? user.photos.small
                                : userPhoto} alt=""/>
                                </NavLink>
                        </div>
                    <div>
                        {
                            user.followed
                                ? <button disabled={followingInProgress.some((id) => id === user.id)}
                                          className={st.btnFollow} onClick={() => {
                                    unfollow(user.id)
                                }}>Unfollow</button>
                                :
                                <button disabled={followingInProgress.some((id: any) => id === user.id)}
                                        className={st.btnUnfollow} onClick={() => {
                                    follow(user.id)
                                }}>Follow</button>
                        }
                            </div>
                            </span>
            <span>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                            </span>
            <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                            </span>
        </div>
    );
};

export default User;