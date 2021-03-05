import React from 'react';
import st from './Users.module.css'
import userPhoto from '../img/monkey.png'
import axios from "axios";

const Users = (props: any) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                })

        }
    }

    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {props.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <img
                            style={{
                                width: '100px',
                                height: '100px',
                            }}
                            src={u.photos.small != null ? u.photos.small
                                : userPhoto} alt=""/></div>
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