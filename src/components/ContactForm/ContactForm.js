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

    const [submitted, setSubmitted] = useState(false)



    const submitHandler = (e) =>{
        e.preventDefault();  
        setSubmitted(true)

        // console.log('templateid: ', process.env.REACT_APP_EMAIL_TEMPLATE_ID) 
        // console.log('userid: ', process.env.REACT_APP_EMAIL_USERID)
        // debugger
        emailjs.sendForm('gmail', process.env.REACT_APP_EMAIL_TEMPLATE_ID, e.target, process.env.REACT_APP_EMAIL_USERID)
        .then((result) => {
            
            if(result.status === 200){
                alert('Your inquiry has been sent')
            } 
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

    const greenCheck = () => <img id='check-mark' src="16x16.png" alt='checkmark' />

    const form = () =>{
        return(
            <form id="contact-form" onSubmit={submitHandler}>
            <div className='form-element'>
                {/* <label>Name:</label> */}
                <div className='field'>
                    <Field placeHolder={"name"} inputType={"input-field"} changeHandler={changeHandler} name={"user_name"} value={userInfo.name} />
                    { validate(userInfo.name) ? greenCheck() : null}
                </div>
            </div>
            <div>
                {/* <label>Email:</label> */}
                <div className='field'>
                    <Field placeHolder={"email"} inputType={"input-field"} changeHandler={changeHandler} name="user_email"  value={userInfo.email}/>    
                    {validEmail() ? greenCheck() : null}
                </div>
                
            </div>
            <div>
                {/* <label>Message:</label> */}
                <div className='field'>
                    <Field placeHolder={"message"} inputType={"description-field"} changeHandler={changeHandler} name="message"  value={userInfo.message} /> 
                    {validate(userInfo.message) ? greenCheck() : null}
                </div>    
            
            </div>
        {validFields() ? <input id="send-button" type="submit" value="Send"></input> :  <input id="send-button" disabled type="submit" value="Send"></input>}
        </form>
        )
    }
  
    return(
        <div id='form-div'>
            
           {submitted ? <h3 id='sending'>Sending...</h3> : form()}
        </div>
        
    )


}

export default ContactForm