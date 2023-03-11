import React, {useEffect} from 'react'
import Header from '../Header/Header'
// import InstagramEmbed from 'react-instagram-embed'
// import PaymentForm from './PaymentForm'
import axios from 'axios'

const Store = () =>{
    // const token = 'IGQVJWOXF3ZAmlRRS1iM1pjX0xkZAHdUTEhocmlkMUhnMTVXdzJPVlItby1kMHlJMkh0LXk4a0h0V0lmWHFsNHk0V0RFUEdtUGVUeGdaZAGRtNkFJMWxpVHlndnNnaEZAkd3hjdkRFYklyZATBWdDcxUnRNTwZDZD'
    // const mediaId = '17926918274100289'
    // const url = `https://graph.instagram.com/v13.0/me?fields=id,account_type,media_count,username,media&access_token=${token}`

    // useEffect(() =>{
    //     axios.get(url, {withCredentials:true})
    //     .then(response => {
    //         console.log("responseFromIG:", response)
    //         // setRequestWindowOpen(response.data.openState)
    //     })

       

    // }, [])
    
    return(
        <div>
            <Header/>
            <h1>Photo Store!!</h1>
            {/* <InstagramEmbed
                url='https://instagr.am/p/Zw9o4/'
                clientAccessToken='395824538752952|0855ec3be96d00aa0d47a9b2b168a2e9'
                maxWidth={320}
                hideCaption={false}
                containerTagName='div'
                protocol=''
                injectScript
                onLoading={() => {}}
                onSuccess={() => {console.log("success")}}
                onAfterRender={() => {}}
                onFailure={() => {console.log("Fail")}}
            /> */}
        </div>
    )
}

export default Store