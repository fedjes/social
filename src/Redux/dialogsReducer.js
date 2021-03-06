const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
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
    ],
    newMessageBody: '',
};
const dialogsReducer =(state = initialState,action)=> {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
           return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody:'',
                messages: [...state.messages,{id: 6, message: body} ],
            };
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body })

    export default dialogsReducer;