import {authAPI} from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA'

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state

    }
}

export const setUserDataAC = (id, email, login) => ({type: SET_USER_DATA, data: {id: id, email: email, login: login}})

export const authMe = () => {
    return async (dispatch) => {
        let authData = await authAPI.authUser().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login));
            }
        })
    }
}
export const loginUser=(data)=>{
    return async (dispatch)=>{
        await authAPI.loginUser(data).then(res=>{
            if(res.resultCode===0){
                dispatch(authMe());
            }

        })
    }
}

export default authReducer;