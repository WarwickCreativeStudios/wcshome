import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

import './postprodcss.css'


const PostProd = () =>{
    return(
        <div id='home'> 
            <div id="photo-body">
                <Header />
                <div className="title-content">
                    <h3>
                        <span>Post-production is an essential part of the creative process that involves adding the final touches to a visual or audio project. </span> <span>Warwick Creative Studios </span> <span> can bring the visions of your businesses and events to life. </span>
                    </h3>
                </div>
                <div className="top-images">
                    <img id='coloring' className='photo-image'src='./post-images/Post-Prod-1.png'></img>
                    <img id='ae' className='photo-image'src='./post-images/AE.png'></img>
                </div>
                        
                <div id='photo-columns'>
                    
                    <div id='photo-column-1'>
                        
                        <p>
                        We are experienced in handling a diverse range of projects ranging from commercials, music videos, social media content and more. Our services such as color correction, sound mixing, and editing ensure your project is polished and of high quality.

                        </p>
                        
                        
                    </div>
                    <div id='photo-column-2'>
                        <p>
                        At Warwick Creative Studios, we’re well-versed in the latest technology and industry-standard software to provide clients with post-production output that meets their specific requirements. Whether it is a corporate video, a product showcase, or a commercial, we can help you achieve the desired impact and effectively communicate your message.
                        </p>
                        <p>
                        To experience high-quality post-production services  inquire below. Trust us with your project, sit back and let us work our magic. 

                        </p>
                    </div>

                   
                </div>

                
                
                <img id='mix' className='photo-image'src='./post-images/MixSetup.png'></img>

                <h1 className='text-center'>Contact Us</h1>
                    {/* <h2 className='text-center'>We Want To Hear From You!</h2> */}
                    <h3 className="text-center">Use the form below to contact us for more information</h3>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}



export default PostProd