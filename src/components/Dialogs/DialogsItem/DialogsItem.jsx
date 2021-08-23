import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <img src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm81XoZa9dFFAFPY-LjxgJ-XAj-KeySicSvw&usqp=CAU'></img>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;