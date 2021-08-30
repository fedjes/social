import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogsItem/DialogsItem";




const Dialogs = (props) => {

    let state = props.dialogsPage;

    let messageElements = state.messages.map(m => <Message message={m.message}/>)
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let newMessageBody = state.newMessageBody;
    let onSendMessageClick = () => {
        props.sendMessage();
    };
    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.message}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea  placeholder='enter your message' value= {newMessageBody} onChange={onNewMessageChange}></textarea></div>
                    <div><button onClick= { onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;