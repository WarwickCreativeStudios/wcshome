import React from 'react';
import './field.css'

const Field = props =>{

    return(
        <input className="input-field" autoFocus={true}  onChange={props.changeHandler} type="text" value={props.name} placeholder={props.placeHolder} />
    )
}
export default Field