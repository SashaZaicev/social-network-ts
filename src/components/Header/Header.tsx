import React from 'react';
import {NavLink} from 'react-router-dom';
//@ts-ignore
import logo from '../img/carrot.svg';
//@ts-ignore
import s from './Header.module.css'

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                    : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>)
}
export default Header;