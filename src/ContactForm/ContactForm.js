import React, {useState} from 'react'
import Field from '../Field/Field'
import './contactformcss.css'

const ContactForm = () =>{
    
    const [userInfo, setUserInfo] = useState({
        name: ""
        ,email: ""
        ,phone: ""
        ,message:""
    })
    

    let id = process.env.REACT_APP_EMAIL_USERID

    const submitHandler = (e) =>{
        e.preventDefault()
        console.log(userInfo.name, userInfo.email, userInfo.phone, userInfo.message)
    }

    const changeHandler = (e) => {
       setUserInfo({
           ...userInfo,
           [e.target.placeholder]: e.target.value
       })
    }

    const validEmail = () =>{
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(userInfo.email) ?  true : false
    }

    const validate = (param) => param.split("").length > 2 ? true : false

    const validFields = () =>{
        if(validate(userInfo.message) && validate(userInfo.name) && validEmail()){
            return true
        }else{
            return false
        }
    }
    debugger
    return(
        
        <form id="contact-form" onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <div className='field'>
                    <Field placeHolder={"name"} inputType={"input-field"} changeHandler={changeHandler} value={userInfo.name} />
                    { validate(userInfo.name) ? "Yes" : null}
                </div>
            </div>
            <div>
                <label>Email:</label>
                <div className='field'>
                    <Field placeHolder={"email"} inputType={"input-field"} changeHandler={changeHandler}  value={userInfo.email}/>    
                    {validEmail() ? "Yes" : null}
                </div>
            </div>
            <div>
                <label>Phone(Optional):</label>
                <div className='field'>
                    <Field placeHolder={"phone"} inputType={"input-field"} changeHandler={changeHandler}  value={userInfo.phone} />
                </div>    
            </div>
                
            <div>
                <label>Message:</label>
                <div className='field'>
                    <Field placeHolder={"message"} inputType={"description-field"} changeHandler={changeHandler}  value={userInfo.message} /> 
                    {validate(userInfo.message) ? "Yes" : null}  
                </div>    
            </div>
           {validFields() ? <input type="submit"></input> : null}
        </form>
    )


}

export default ContactForm