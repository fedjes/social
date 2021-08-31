import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";
import Friends from "../SiteBar/SiteBar";
import state from "../../Redux/store";


const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/Profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Dialogs'activeClassName={s.activeLink}>Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News"activeClassName={s.activeLink}>New</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music"activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings"activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <Friends sitebarPage={props.Friends} />
        </nav>
    )
}

export default Nav;