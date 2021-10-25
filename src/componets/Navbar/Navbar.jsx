import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavbarList from "./NavbarList/NavbarList";
import Friends from "./FriendsList/Friends";


const Navbar = () => {
    return (
        <navbar className = {s.navbarList}>

            <div className = 'nvl'>
                <NavbarList />
            </div>

            <div className ='Frds'>
                <Friends  />
            </div>
        </navbar>

    )
}


export default Navbar;