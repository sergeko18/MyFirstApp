import React from 'react';
import s from'./Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://i.pinimg.com/originals/b0/6f/c3/b06fc3a9d0faaf130efa0cf82e4cf8ad.png' />
        <div className={s.loginBlock}>
            {props.isAuth
                ? <div>{props.login}  <button onClick={props.logout}>Log out </button></div>
                : <NavLink activeClassName={s.itemActive} to={'/login'}>
                Login
            </NavLink>}

        </div>
    </header>
}



export default Header;