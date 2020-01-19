import React from 'react';
import style from '../Login.module.css'

import { Field, reduxForm } from 'redux-form'

let LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form className={style.addLoginForm} onSubmit={handleSubmit}>
            <div className={style.input}>
                <label htmlFor="email">Email</label>
                <Field name="email" component="input" type="text" />
            </div>
            <div className={style.input}>
                <label htmlFor="password">Password</label>
                <Field name="password" component="input" type="password" />
            </div>
            <div>
                <label htmlFor="rememberMe">rememberMe</label>
                <Field name="rememberMe" component="input" type="checkbox" />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}


export default reduxForm({form: 'login'})(LoginForm)