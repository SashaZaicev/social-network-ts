import React from 'react';
import {NavLink} from 'react-router-dom';
//@ts-ignore
import logo from '../img/carrot.svg';
//@ts-ignore
import s from './Header.module.css'

const Header = (props: any) => {
    return (
        <header className={`${s.header}`}>
            <img src={logo} alt="logo"/>

            <div className={`${s.loginBlock} ${s.btnStylePosition}`}>
                {props.isAuth
                    ? <div>{props.login} - <button className={s.btnStyle}
                                                   onClick={props.logout}>Log out</button></div>
                    : <button className={`${s.btnStyle} ${s.btnStylePosition}`}><NavLink to={'/login'}>Login</NavLink>
                    </button>}
            </div>
        </header>)
}
export default Header;