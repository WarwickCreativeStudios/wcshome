import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import './field.css'

const Field = props =>{
    const fieldDecider = () => {
        if (props.inputType === "description-field"){
            return <textarea className={props.inputType} autoFocus={false}  onChange={props.changeHandler} type="text" value={props.name} name={props.placeHolder} placeholder={props.placeHolder} />
        }else{
            return <input className={props.inputType} autoFocus={false}  onChange={props.changeHandler} type="text" value={props.name} name={props.placeHolder} placeholder={props.placeHolder} />
        }
    }

    return(
        fieldDecider()
    )
}
export default Field