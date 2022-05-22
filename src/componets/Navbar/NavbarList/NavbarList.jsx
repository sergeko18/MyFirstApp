import React from 'react';
import {NavLink} from "react-router-dom";
import s from './NavbarList.module.css'


const NavbarList = () => {
    return (
        <navbarList className={s.navbar}>

            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.itemActive}>Profile</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/dialogs" activeClassName={s.itemActive}>Messages</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/news" activeClassName={s.itemActive}>News</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/music" activeClassName={s.itemActive}>Music</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/settings" activeClassName={s.itemActive}>Settings</NavLink>
            </div>

            <div className={s.item}>
                <NavLink to="/users" activeClassName={s.itemActive}>Users</NavLink>
            </div>

        </navbarList>
    )
}








export default NavbarList;
