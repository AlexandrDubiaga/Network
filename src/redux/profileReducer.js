const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{id: 1, message: "Hi im new Post", likesCount: 2}, {
        id: 2,
        message: "Its my first Post",
        likesCount: 15
    }],
    newPostText: 'Solmir__ winner'
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 22
            }
            return{
                ...state,
                posts:[...state.posts,newPost],
                newPostText:''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return{
                ...state,
                newPostText:action.text
            }
        }
        default:
            return state;
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

export default profileReducer;