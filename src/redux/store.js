import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [{id: 1, message: "Hi im new Post", likesCount: 2}, {
                id: 2,
                message: "Its my first Post",
                likesCount: 15
            }],
            newPostText: 'Solmir__ winner'
        },
        dialogsPage: {
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
        },
        siteBar: {}
    },
    getState(){
        return this._state;
    },
    _callSubscriber(){
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}



export default store;