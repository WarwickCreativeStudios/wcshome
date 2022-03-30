import React, {useState} from 'react'
import Field from '../Field/Field'
import './contactformcss.css'

const ContactForm = () =>{
    const [status, setStatus] = useState("Submit")
    const [showSubmit, setShowSubmit] = useState(true)
    const [userInfo, setUserInfo] = useState({
        name: ""
        ,email: ""
        ,phone: ""
        ,message:""
    })
    
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

    return(
        <form id="contact-form" onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <div className='field'>
                    <Field placeHolder={"name"} inputType={"input-field"} changeHandler={changeHandler} value={userInfo.name}/>
                    
                </div>
            </div>
            <div>
                <label>Email:</label>
                <div className='field'>
                    <Field placeHolder={"email"} inputType={"input-field"} changeHandler={changeHandler}  value={userInfo.email}/>    
                </div>
            </div>
            <div>
                <label>Phone:</label>
                <div className='field'>
                    <Field placeHolder={"phone"} inputType={"input-field"} changeHandler={changeHandler}  value={userInfo.phone} />
                </div>    
            </div>
                
            <div>
                <label>Message:</label>
                <div className='field'>
                    <Field placeHolder={"message"} inputType={"description-field"} changeHandler={changeHandler}  value={userInfo.message} />   
                </div>    
            </div>
           <input type="submit"></input>
        </form>
    )


}

export default ContactForm