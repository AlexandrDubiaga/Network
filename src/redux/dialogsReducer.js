
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
        case SEND_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: action.newMessage}],
            }
        }
        default:
            return state;
    }

}

export let sendNewMessageActionCreator = (newMessage) => {
    return {
        type: SEND_MESSAGE,newMessage
    }
}

export default dialogsReducer;