import React from 'react';
import s from  './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://content.asos-media.com/-/media/images/meta/asos-logo-new.jpg"></img>


            <div className={s.loginBlock}>
                {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;