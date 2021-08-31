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
    debugger;
            let stateCopy = {
                ...state,
              /*  messages: [...state.messages]*/
            };
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy;

        case SEND_MESSAGE: {

            let body = state.newMessageBody;
            stateCopy.newMessageBody ='';
            stateCopy.messages.push({id: 6, message: body});
            return stateCopy;
            /*state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;*/
        }
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body })

    export default dialogsReducer;