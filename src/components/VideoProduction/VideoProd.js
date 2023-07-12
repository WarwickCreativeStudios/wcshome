import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

import './videoprodcss.css'


const VideoProd = () =>{
    return(
        <div id='home'> 
            <div id="photo-body">
                <Header />
                <div className="title-content">
                    <h3>
                        <span>Video is a powerful medium that can effectively convey emotions, communicate messages, and captivate audiences.  </span> <span>Warwick Creative Studios professional video production services </span> <span> enable brands to differentiate themselves in today's crowded marketplace.</span>
                    </h3>
                </div>
                <div id='photo-columns'>
                    
                    <div id='photo-column-1'>
                       
                        <p>
                        We have vast experience creating visually stunning video content, ranging from product showcase videos, commercials, explainer videos to interactive content for social media platforms. We work closely with our clients to fully understand their objectives and tailor video content that engages and inspires target audiences.
                        </p>
                        <div className='column-1-images'>
                        <img id='cabazon' className='photo-image' src='./home-images/Cabazon.png'></img>
                        </div>
                        
                    </div>
                    <div id='photo-column-2'>
                        <div className="photo-image-section">
                            {/* <div className='section-1'> */}
                            <img  id='cole' className='photo-image' src='./audio-images/JCOLE-Set-1.png'></img>
                                
                            {/* </div> */}
                            <div className='section-2'>
                            
                            </div>
                            

                        </div>
                        <p>
                        At Warwick Creative Studios, our commitment to utilizing cutting-edge technology and innovative design solutions to produce only high-quality output from a vast range of video production services is second to none. Clients can depend on their video content to incorporate exceptional motion graphics, seamless animations, and captivating visuals.
                        </p>
                        <p>
                        To enhance your brand's video presence and showcase your unique message, choose Warwick Creative Studios when professionalism and customer satisfaction are required. 
                        </p>
                    </div>
                </div>
                <h1 className='text-center'>Contact Us</h1>
                    {/* <h2 className='text-center'>We Want To Hear From You!</h2> */}
                    <h3 className="text-center">Use the form below to contact us for more information</h3>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}



export default VideoProd