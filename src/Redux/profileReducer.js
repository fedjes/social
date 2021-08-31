
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW_POST';

let initialState = {
    posts: [
        {id: 1, message: 'Hi how are you?', like: '15'},
        {id: 2, message: 'It\'s my second post', like: '20'},
        {id: 3, message: ' It\'s my third post', like: '10'},
        {id: 4, message: 'It\'s my fourth post', like: '2'}
    ],
    newPostText: 'let new post'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText ='';
        return stateCopy;
    }
    case UPDATE_NEW_POST: {
        let stateCopy = {...state};
        stateCopy.newPostText = action.newPostText
        return stateCopy;
    }

        default:
            return state;
    }
};

export const addPostActionCreater = () => ({type: ADD_POST})
export const addUpdateNewPost = (text) => ({type: UPDATE_NEW_POST, newText: text })

export default profileReducer;