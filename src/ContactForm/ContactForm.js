import React, {useState} from 'react'
import Field from '../Field/Field'
import { Button } from 'bootstrap'

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
        console.log(userInfo.email)
    }

    const changeHandler = (e) => {
       setUserInfo({
           ...userInfo,
           [e.target.placeholder]: e.target.value
       })
    }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <label>Name:</label>
                <Field placeHolder={"name"} changeHandler={changeHandler} value={userInfo.name}/>
            </div>
            <div>
                <label>Email:</label>
                <Field placeHolder={"email"} changeHandler={changeHandler}  value={userInfo.email}/>
            </div>
            <div>
                <label>Phone:</label>
                <Field placeHolder={"phone"} changeHandler={changeHandler}  value={userInfo.phone} />
            </div>
            <div>
                <label>Message:</label>
                <Field placeHolder={"message"} changeHandler={changeHandler}  value={userInfo.message} />
            </div>
           <input type="submit"></input>
        </form>
    )


}

export default ContactForm