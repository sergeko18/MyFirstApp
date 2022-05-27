import React from 'react';
import s from './Navbar.module.css';
import NavbarList from "./NavbarList/NavbarList";
import Friends from "./FriendsList/Friends";


const Navbar = () => {
    return (
        <div className = {s.navbarList}>

            <div className = 'nvl'>
                <NavbarList />
            </div>

            <div className ='Frds'>
                <Friends  />
            </div>
        </div>

    )
}


export default Navbar;