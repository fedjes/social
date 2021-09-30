import React from 'react';

import s from './ProfileInfo.module.css';
import Preloader from "../../component/preloader";

const ProfileInfo = (props) => {

    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.fon}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW6509Xrnys2Pp_8RB3ffNOsqDrKlPtkvkRQ&usqp=CAU'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} />
                ava + description
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.fullName}</p>
                <p>{props.profile.lookingForAJobDescription}</p>
                <p>{props.profile.contacts.twitter}</p>
            </div>
        </div>
    )
}

export default ProfileInfo;