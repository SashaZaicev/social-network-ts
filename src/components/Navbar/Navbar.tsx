import {NavLink} from 'react-router-dom';
import style from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.active}
          to="/profile">Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.active}
          to="/dialogs">Messages
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.active}
          to="/users">Users
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.active}
          to="/news">News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.active}
          to="/music">Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink
          className={style.navLink}
          activeClassName={style.active}
          to="/settings">Settings
        </NavLink>
      </div>
    </nav>
  );
};
