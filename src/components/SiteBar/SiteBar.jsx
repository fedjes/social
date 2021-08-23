import React from 'react';
import s from  './SiteBar.module.css';
import Friend from './friend/Friends';


const Friends = (props) => {
 /*   let friendData = [
        {id:1, name:'Jon'},
        {id:2, name:'Mew'},
        {id:3, name:'Yoj'}
    ] PROVERKA
    let friendElem = [
        <Friend name={friendData[0].name} id={friendData[0].id}/>,
        <Friend name={friendData[1].name} id={friendData[1].id}/>,
        <Friend name={friendData[2].name} id={friendData[2].id}/>
    ]*/
    return(
        <div>
        <h2>Friends </h2>
            <Friend Friends={props.Friends} />
        </div>

    )
}


export default Friends;
