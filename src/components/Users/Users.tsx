import React from 'react';
// @ts-ignore
import st from './Users.module.css';
// @ts-ignore
import userPhoto from '../img/monkey.png';
import {NavLink} from 'react-router-dom';

const Users = (props: any) => {
    let pagesCount = Math.ceil(props.totalUsersCount
        / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map((p) => {
                    return <span
                        className={props.currentPage === p && st.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}>
                            {p} </span>
                })}

            </div>
            {props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img
                            style={{
                                width: '100px',
                                height: '100px',
                            }}
                            src={u.photos.small != null ? u.photos.small
                                : userPhoto} alt=""/>
                                </NavLink>
                        </div>
                    <div>
                        {u.followed ?
                            <button className={st.btnFollow} onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button> :
                            <button className={st.btnUnfollow} onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>
                        }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </div>
            )}
        </div>
    );
};

export default Users;