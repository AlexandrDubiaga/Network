import {authMe} from "./authReducer";
const INITIALL_AUTH = "INITIALL_AUTH"

let initialState = {
    initiallAuth:false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALL_AUTH:{
            return{
                ...state,
                initiallAuth:action.val
            }
        }
        default:return state

    }
}
export const initiallAuth=(val)=>({type:INITIALL_AUTH,val})

export const initializedAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(authMe()).then(()=>{
        dispatch(initiallAuth(true))
    })
}

export default appReducer;


