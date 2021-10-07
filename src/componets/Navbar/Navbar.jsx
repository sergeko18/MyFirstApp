import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <navbar className={s.navbar}>

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


        </navbar>
    )
}


export default Navbar;