import React from 'react';
import style from '../Login.module.css'
import styleError from '../../common/FormsControls.module.css'

import { Field, reduxForm } from 'redux-form'
import {Input} from "../../common/FormsControls";
import {maxLenghtCreator, requairedField} from "../../../utils/validators/validators";
let maxLeng = maxLenghtCreator(30)
let LoginForm = props => {
    const { handleSubmit } = props;
    return (
        <form className={style.addLoginForm} onSubmit={handleSubmit}>
            <div className={style.input}>
                <label htmlFor="email">Email</label>
                <Field validate={[requairedField,maxLeng]} name="email" component={Input} type="text" />
            </div>
            <div className={style.input}>
                <label htmlFor="password">Password</label>
                <Field validate={[requairedField,maxLeng]} name="password" component={Input}  type="password" />
            </div>
            <div>
                <label htmlFor="rememberMe">rememberMe</label>
                <Field validate={[requairedField,maxLeng]} name="rememberMe" component={Input}  type="checkbox" />
            </div>
            {props.capcha==null?'':
                <div> <img src={props.capcha} /> <Field validate={[requairedField,maxLeng]}name="capcha" component={Input}  type="text" /></div>
            }
            {props.error&& <div className={styleError.formSummaryError}>
                {props.error}
            </div>}

            <button type="submit">Submit</button>

        </form>
    )

}


export default reduxForm({form: 'login'})(LoginForm)