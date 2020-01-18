import {profileAPI} from "../api/api";
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'UPDATE-NEW-SET_USER_PROFILE-TEXT';
const GET_USER_STATUS = 'GET_USER_STATUS';





let initialState = {
    posts: [{id: 1, message: "Hi im new Post", likesCount: 2}, {
        id: 2,
        message: "Its my first Post",
        likesCount: 15
    }],
    status:'',
    userId:null,
    userProfile:null,
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
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.text
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile:action.userProfile
            }
        }
        case GET_USER_STATUS: {
            return {
                ...state,
                status:action.status
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

export let setUserProfile = (userProfile) => {
    return {
        type: SET_USER_PROFILE, userProfile
    }
}
export let setUserStatus = (status) => {
    return {
        type: GET_USER_STATUS, status
    }
}



export const getUserProfile = (userIdFromWithRouterParams) => {
    return async (dispatch) => {
       let data = await  profileAPI.getUsersProfile(userIdFromWithRouterParams);
        dispatch(setUserProfile(data));
    }
}
export const getUserStatus= (userId) => {
    debugger
    return async (dispatch) => {
        let data = await  profileAPI.getUsersStatus(userId);
        dispatch(setUserStatus(data.data));
    }
}
export const updateUserStatus= (status) => {
    return async (dispatch) => {
        let data = await  profileAPI.updateStatus(status);
        if(data.data.resultCode===0){
            dispatch(setUserStatus(status))
        }
    }
}





export default profileReducer;