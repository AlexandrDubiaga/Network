import React from 'react';
import {Field, reduxForm} from 'redux-form'
import {maxLenghtCreator, requairedField} from "../../../../../utils/validators/validators";
import {Textarea} from "../../../../common/FormsControls";
let maxLeng = maxLenghtCreator(10)

let AddNewPostForm = props => {
    const {handleSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field validate={[requairedField,maxLeng]} name="text" component={Textarea} type="textarea"/>
                <div>
                    <button type="submit">Add post</button>
                </div>
            </form>
        </div>
    )
}


export default reduxForm({form: 'addNewPostForm'})(AddNewPostForm)