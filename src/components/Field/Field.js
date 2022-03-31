import { findAllByDisplayValue } from '@testing-library/react';
import React from 'react';
import './field.css'

const Field = props =>{

    // const namer = () =>{
    //     switch(props./)
    // }

    const fieldDecider = () => {
        if (props.inputType === "description-field"){
            return <textarea className={props.inputType} autoFocus={false}  onChange={props.changeHandler} type="text"  name={props.name} placeholder={props.placeHolder} />
        }else{
            return <input className={props.inputType} autoFocus={false}  onChange={props.changeHandler} type="text" name={props.name} placeholder={props.placeHolder} />
        }
    }

    return(
        fieldDecider()
    )
}
export default Field