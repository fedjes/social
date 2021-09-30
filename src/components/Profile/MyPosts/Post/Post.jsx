import React from 'react';
import s from './Post.module.css';


const Post = (props) => {

    return (

        <div className={s.item}>
            <img src="https://wallpaperaccess.com/full/3740903.jpg"></img>
            {props.message}
            <div>
                <span>like</span> {props.like}
            </div>
        </div>

    )
}

export default Post;