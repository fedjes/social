import React from 'react';
import Post from './Post/Post';

import s from './MyPosts.module.css';
import {addPostActionCreater, addUpdateNewPost} from "../../../Redux/State";




const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} like={p.like}/> )

    let newPostElement = React.createRef();
    let addPost = () => {
        props.dispatch( addPostActionCreater());
    }

    let onChangePost = () =>{
        let text = newPostElement.current.value;
        props.dispatch(addUpdateNewPost(text));
    }


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <textarea onChange={onChangePost} ref={newPostElement} value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost} >add</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;

