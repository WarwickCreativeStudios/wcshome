import React, {useState, useRef} from 'react'
import Field from '../Field/Field'
import './contactformcss.css'
import emailjs from 'emailjs-com'

const ContactForm = () =>{
    
    const [userInfo, setUserInfo] = useState({
        name: ""
        ,email: ""
        ,phone: ""
        ,message:""
    })

    const form = useRef()
    const serve = process.env.REACT_APP_EMAIL_SERIVCE_ID

    debugger

    const submitHandler = (e) =>{
        // e.preventDefault()
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('gmail', process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_USERID)
        .then((result) => {
            debugger
            window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
        }, (error) => {
            console.log(error.text);
        });
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
  
    return(
        
        <form id="contact-form" onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <div className='field'>
                    <Field placeHolder={"name"} inputType={"input-field"} changeHandler={changeHandler} name={"user_name"} value={userInfo.name} />
                    { validate(userInfo.name) ? "Yes" : null}
                </div>
            </div>
            <div>
                <label>Email:</label>
                <div className='field'>
                    <Field placeHolder={"email"} inputType={"input-field"} changeHandler={changeHandler} name="user_email"  value={userInfo.email}/>    
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
                    <Field placeHolder={"message"} inputType={"description-field"} changeHandler={changeHandler} name="message"  value={userInfo.message} /> 
                    {validate(userInfo.message) ? "Yes" : null}  
                </div>    
            </div>
           {validFields() ? <input id="send-button" type="submit" value="Send"></input> : null}
        </form>
    )


}

export default ContactForm