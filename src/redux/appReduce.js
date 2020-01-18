import {authMe} from "./authReducer";


let initialState = {}
const appReducer = (state = initialState, action) => {
    switch (action.type) {


    }
}

export default appReducer;


export const initializedAppThunkCreator = () => (dispatch) => {
    let promise = dispatch(authMe());
}
