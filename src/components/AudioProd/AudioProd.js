import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

import './audioprodcss.css'


const AudioProd = () =>{
    return(
        <div id='home'> 
            <div id="photo-body">
                <Header />
                <div className="title-content">
                    <h3>
                        <span>Sound is a vital element that can captivate and engage audiences, </span> <span>making it crucial for businesses and artists alike to harness its potential. </span> <span> Warwick Creative Studios, specializes in delivering exceptional audio production services that elevate brands and leave lasting impressions. </span>
                    </h3>
                </div>
                <div id='photo-columns'>
                    
                    <div id='photo-column-1'>
                        
                        <p>
                        With a comprehensive range of offerings, we excel in recording, mixing, and sound design. Our vast expertise outside the studio, supporting and recording of live events. provides unparalleled sonic experiences that resonate with listeners. What sets Warwick Creative Studios apart is our extensive experience working with hundreds of major label and indie artists.
                        </p>
                        <div className='column-1-images'>
                            <img  id='cole' className="photo-image"  src='./audio-images/JCOLE-Set-1.png'></img>
                            <img  id='jh-mic' className='photo-image' src='./audio-images/JH-Audio-2.png'></img>
                           
                            
                            
                            {/* <img id='boat-glasses'className='photo-image' src='./photo-images/iFile_002.jpeg'></img>
                            <img id='painted' className='photo-image' src='./home-images/Oia Painted.png'></img> */}
                        </div>
                        
                    </div>
                    <div id='photo-column-2'>
                       
                            {/* <div className='section-1'> */}
                                <img id='jh' className='photo-image' src='./photo-images/JH-TBP-Studio.png'></img>
                                <img  id='jh-aar' className='photo-image' src='./photo-images/JH-AAR-ResizedForAudio.png'></img>
                          
                        <p>
                         Our collaboration with renowned musicians has strengthened our abilities in crafting dynamic, immersive soundscapes. Additionally, our proficiency in live recordings and voice-over production enhances our versatility and enables them to tailor their services to diverse audio needs.  Whether you seek to enhance your brand's audio presence, create podcast advertisements or require professional audio services for a creative project, we stand ready to provide quality solutions that cultivate meaningful connections with your audience

                        </p>
                    </div>
                    
                </div>
                <h4 className='text-center'></h4>

                <h1 className='text-center'>Contact Us</h1> 
                    <h3 className="text-center">Use the form below to contact us for more information</h3>
                <ContactForm />
            </div>
            <Footer />
        </div>
    )
}



export default AudioProd