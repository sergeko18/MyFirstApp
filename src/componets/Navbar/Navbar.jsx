import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import NavbarList from "./NavbarList/NavbarList";
import Friends from "./FriendsList/Friends";


const Navbar = () => {
    return (
        <navbar className = {s.navbarList}>

            <div>
                <NavbarList />
            </div>

            <div>
                <Friends />
            </div>
        </navbar>

    )
}


export default Navbar;