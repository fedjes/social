import React from 'react';

import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={s.fon}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6509Xrnys2Pp_8RB3ffNOsqDrKlPtkvkRQ&usqp=CAU'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src='https://images.saymedia-content.com/.image/t_share/MTc0NTE4MDEzODc2MjUwNTY5/strongest-avatars.png'></img>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;