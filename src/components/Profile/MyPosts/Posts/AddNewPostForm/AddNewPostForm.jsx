import React from 'react';
import {Field, reduxForm} from 'redux-form'

let AddNewPostForm = props => {
    const {handleSubmit} = props;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field name="text" component="textarea" type="textarea"/>
                <div>
                    <button type="submit">Add post</button>
                </div>
            </form>
        </div>
    )
}


export default reduxForm({form: 'addNewPostForm'})(AddNewPostForm)