import {FC} from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../img/carrot.svg';
import style from './Header.module.css'

type HeaderPropsType = {
  isAuth: boolean,
  login: string,
  getAuthUserData: () => void,
  logout: () => void,
}

export const Header: FC<HeaderPropsType> = ({
                                              isAuth,
                                              login,
                                              logout
                                            }) => {
  return (
    <header className={`${style.header}`}>
      <img src={logo} alt="logo"/>
      <div className={`${style.loginBlock} ${style.btnStylePosition}`}>
        {isAuth
          ? <div>{login} -
            <button className={style.btnStyle}
                    onClick={logout}>
              Log out
            </button>
          </div>
          : <button className={`${style.btnStyle} ${style.btnStylePosition}`}>
            <NavLink to={'/login'}>Login</NavLink>
          </button>}
      </div>
    </header>)
};
