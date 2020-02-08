import React from 'react';

import {Field, reduxForm} from 'redux-form'
import {Textarea} from "../../common/FormsControls";
import {maxLenghtCreator, requairedField} from "../../../utils/validators/validators";
let maxLeng = maxLenghtCreator(10)

let AddMessageForm = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="text" validate={[maxLeng, requairedField]} component={Textarea} type="text"/>
            <div>
                <button type="submit">Add Message</button>
            </div>
        </form>
    )
}


export default reduxForm({form: 'addMessageForm'})(AddMessageForm)















