import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

import './photographycss.css'


const Photography = () =>{
    return(
        <div id='home'> 
            <div id="photo-body">
                <Header />
                <div className="title-content">
                    <h3>
                        <span>Photography is an art form that can effectively communicate a brand's message and evoke emotions. </span> <span>Whether it's portraits, product shots or stunning landscapes, Warwick Creative Studios'</span> <span> photography services excel in capturing and conveying captivating visuals. </span>
                    </h3>
                </div>
                <div id='photo-columns'>
                    
                    <div id='photo-column-1'>
                        
                        <p>
                            We offer a comprehensive range of photography services suitable for businesses of all sizes. From portraits that highlight the unique personalities of your team members or customer base, to compelling product photography that puts your offerings in the best possible light, Warwick Creative Studios has got you covered. We also offer breathtaking landscape photography that enables your target audience to envision themselves in the idyllic settings.
                        </p>
                        
                        <div className='column-1-images'>
                            <img id='bank' className='photo-image' src='./photo-images/Unicorn-Bank.png'></img>
                            <img id='painted' src='./home-images/Oia Painted.png'></img>
                            {/* <img id='ri-oia-diculous' className='photo-image' src='./photo-images/Ri-Oia-Diculous-cropped.png'></img> */}
                            
                            <img id='boat-glasses'className='photo-image' src='./photo-images/iFile_002.jpeg'></img>
                        </div>
                       
                    </div>
                    <div id='photo-column-2'>
                        <div className="photo-image-section">
                            {/* <div className='section-1'> */}
                                <img id='jh' lassName='photo-image' src='./photo-images/JH-14.png'></img>
                                
                            {/* </div> */}
                            <div className='section-2'>
                                <img className='photo-image' src='./photo-images/WickhamLake-1.png'></img>
                                <img id="earrings" className='photo-image' src='./photo-images/Shop-Earrings.png'></img>
                                <img className='photo-image' src='./photo-images/Blue Palace.png'></img>
                            </div>
                            

                        </div>
                        <p>
                            Warwick Creative Studios'  delivers stunning photographs that encapsulate your brand's essence and that can be used for various marketing materials, such as your website, social media platforms, and advertising campaigns. With our personalized and professional approach, you can be confident that your photography needs are in good hands.

                        </p>
                    </div>
                </div>
                <h1 className='text-center'>Contact Us</h1>
                    {/* <h2 className='text-center'>We Want To Hear From You!</h2> */}
                    <h4 id='contact' className="text-center">Use the form below to contact us for more information</h4>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}



export default Photography