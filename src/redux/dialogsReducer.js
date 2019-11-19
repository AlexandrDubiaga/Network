const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: "Alex"},
        {id: 2, name: "Solmir__"},
        {id: 3, name: "Hworang"},
        {id: 4, name: "Paul"},
        {id: 5, name: "Messi"}
    ],
    messages: [
        {id: 1, message: "I winnig incubator"},
        {id: 2, message: "React"},
        {id: 3, message: "Redux"},
        {id: 4, message: "Flux"}
    ],
    newMessageBody: ''
}
const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.text;
            return state;
        case SEND_MESSAGE:
            state.messages.push({id: 5, message: state.newMessageBody})
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }

}
export let updateNewMessageActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, text: newText
    }
}
export let sendNewMessageActionCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;