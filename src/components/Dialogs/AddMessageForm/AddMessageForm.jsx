import React from 'react';

import {Field, reduxForm} from 'redux-form'

let AddMessageForm = props => {
    const {handleSubmit} = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field name="text" component="textarea" type="text"/>
            <div>
                <button type="submit">Add Message</button>
            </div>
        </form>
    )
}


export default reduxForm({form: 'addMessageForm'})(AddMessageForm)















