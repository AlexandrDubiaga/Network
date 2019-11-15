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
            newMessageBody:''
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this.getState().profilePage.newPostText,
                likesCount: 22
            }
            this.getState().profilePage.posts.push(newPost);
            this.getState().profilePage.newPostText = '';
            this._callSubscriber(this.getState());
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this.getState().profilePage.newPostText = action.text;
            this._callSubscriber(this.getState());
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY) {

            this.getState().dialogsPage.newMessageBody = action.text;
            this._callSubscriber(this.getState());
        } else if (action.type === SEND_MESSAGE) {
            this.getState().dialogsPage.messages.push({id:5,message:this.getState().dialogsPage.newMessageBody})
            this._callSubscriber(this.getState());
            this.getState().dialogsPage.newMessageBody = '';
        }
    }
}
export let addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export let updateNewPostTextActionCreator = (newText) => {
    return {
        type: UPDATE_NEW_POST_TEXT, text: newText
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

export default store;