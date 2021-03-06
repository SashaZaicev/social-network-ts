import React from 'react';
import {NavLink} from 'react-router-dom';
//@ts-ignore
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className={s.navLink} activeClassName={s.active} to="/profile">Profile</NavLink></div>
            <div className={s.item}>
                <NavLink className={s.navLink} activeClassName={s.active} to="/dialogs">Messages</NavLink></div>
            <div className={s.item}>
                <NavLink className={s.navLink} activeClassName={s.active} to="/users">Users</NavLink></div>
            <div className={s.item}>
                <NavLink className={s.navLink} activeClassName={s.active} to="/news">News</NavLink></div>
            <div className={s.item}>
                <NavLink className={s.navLink} activeClassName={s.active} to="/music">Music</NavLink></div>
            <div className={s.item}>
                <NavLink className={s.navLink} activeClassName={s.active} to="/settings">Settings</NavLink></div>
            <div></div>
        </nav>

    );
};

export default Navbar;