const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you?', like: '15'},
        {id: 2, message: 'It\'s my second post', like: '20'},
        {id: 3, message: ' It\'s my third post', like: '10'},
        {id: 4, message: 'It\'s my fourth post', like: '2'}
    ],
    newPostText: 'let new post',
    profile: null
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0

            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST: {
            return {
                ...state,
                newPostText: action.newPostText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default:
            return state;
    }
};

export const addPostActionCreater = () => ({type: ADD_POST})
export const setUsersProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const addUpdateNewPost = (text) => ({type: UPDATE_NEW_POST, newText: text})

export default profileReducer;