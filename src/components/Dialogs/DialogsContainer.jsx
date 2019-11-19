import React from 'react';
import {sendNewMessageActionCreator, updateNewMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
export default compose(connect(mapStateToProps, {sendNewMessageActionCreator,updateNewMessageActionCreator}))(Dialogs);

