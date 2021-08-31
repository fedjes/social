import React from 'react';
import {addPostActionCreater, addUpdateNewPost} from "../../../Redux/profileReducer";
import MyPosts from "./MyPosts";

import {connect, } from "react-redux";



const mapMyStateToProps = (state) => {
        return {
                posts: state.profilePage.posts,
                newPostText: state.profilePage.newPostText
                }
    };
const mapMyDispatchToProps = (dispatch) => {
       return {
           addUpdateNewPost: (text) => {
                   let action = addUpdateNewPost(text);
                   dispatch(action);
                },
               addPost: () => {
                   dispatch(addPostActionCreater());
               }
    }
};


const MyPostsContainer = connect(mapMyStateToProps,mapMyDispatchToProps)(MyPosts);


export default MyPostsContainer;

