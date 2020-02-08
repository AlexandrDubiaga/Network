import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPCHA = 'SET_CAPCHA'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    capcha: ''
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: action.isAuth
            }
        }
        case SET_CAPCHA: {
                return {
                    ...state,
                    capcha: action.capcha
                }
            }

        default:
            return state

    }
}

export const setUserDataAC = (id, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {id: id, email: email, login: login},
    isAuth
})
export const setCapchaAC = (capcha) => ({type: SET_CAPCHA, capcha})

export const authMe = () => {
    return async (dispatch) => {
        let authData = await authAPI.authUser().then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setUserDataAC(id, email, login, true));
            }
        })
    }
}
export const loginUser = (data) => {
    return async (dispatch) => {
        await authAPI.loginUser(data).then(res => {
            if (res.data.resultCode === 0) {
                dispatch(authMe());
            } else if (res.data.resultCode === 10) {
                securityAPI.getCaptchaUrl().then(response => {
                    dispatch(setCapchaAC(response.data.url))
                })
            }

        })
    }
}
export const logoutUser = () => {
    return async (dispatch) => {
        await authAPI.logoutUser().then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setUserDataAC(null, null, null, false));
            }

        })
    }
}

export default authReducer;