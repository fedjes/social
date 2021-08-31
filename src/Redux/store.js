import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi how are you?', like: '15'},
                {id: 2, message: 'It\'s my second post', like: '20'},
                {id: 3, message: ' It\'s my third post', like: '10'},
                {id: 4, message: 'It\'s my fourth post', like: '2'}
            ],
            newPostText: 'let post'
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'where are you'},
                {id: 3, message: 'yeap'},
                {id: 4, message: 'yeap'},
                {id: 5, message: 'yeap'}
            ],
            dialogs: [
                {id: 1, name: 'fed'},
                {id: 2, name: 'udy'},
                {id: 3, name: 'pic'},
                {id: 4, name: 'mort'},
                {id: 5, name: 'fid'}
            ]
        },
        newMessageBody: '',
        sitebarPage: {
            Friends: [
                {id: 1, name: 'Jon'},
                {id: 2, name: 'Mew'},
                {id: 3, name: 'Yoj'}
            ]
        }
    },
    _callSubscribe  ()  {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe  (observer)  {
        this._callSubscribe = observer;
    },
/*
    addPost (postMessage) {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            like: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscribe(this._state);
    },
    updateNewPostChange  (newText)  {

        this._state.profilePage.newPostText = newText;
        this._callSubscribe(this._state);
    },*/

   dispatch(action) {

       this._state.profilePage.posts = profileReducer(this._state.profilePage, action);
       this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

       this._callSubscribe(this._state);
    }
};





export default store;