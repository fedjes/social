import React from 'react';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../Redux/dialogsReducer";




let MapStateToProps = (state) => {
return {
    dialogsPage: state.dialogsPage
}
};

let MapDispatchToProps = (dispatch) => {
       return {
           updateNewMessageBody: () => {
               dispatch(sendMessageCreator());
           },
           sendMessage: (body) => {
               dispatch(updateNewMessageBodyCreator(body));
           }
       }
};



const DialogsContainer = connect(MapStateToProps,MapDispatchToProps)(Dialogs);

export default DialogsContainer;