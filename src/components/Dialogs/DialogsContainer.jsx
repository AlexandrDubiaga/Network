import React from 'react';
import {sendNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth:state.auth.isAuth
    }
}
let redirect = WithAuthRedirect(Dialogs)
export default compose(connect(mapStateToProps, {sendNewMessageActionCreator}))(redirect);

