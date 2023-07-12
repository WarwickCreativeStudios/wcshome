import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

import './adservicecss.css'


const AdService = () =>{
    return(
        <div id='home'> 
            <div id="photo-body">
                <Header />
                <div className="title-content">
                    <h3>
                        <span>Warwick Creative Studios offers top-notch ad servicing services. </span> <span>Tailored to help businesses effectively reach their </span> <span> target audience and maximize their advertising impact.</span>
                    </h3>
                </div>
                <div id='photo-columns'>
                    
                    <div id='photo-column-1'>
                        
                        <p>
                        After we’ve created your ad, and even if we didn’t, Warwick Creative Studios will utilize our expertise in programmatic advertising  to ensure your ads are seen by the right people. We can leverage newer popular market places such as YouTube, Hulu, and other streaming services, as well established local advertising in the Cable TV marketplace to reach a wide audience and enhance brand visibility.
                        </p>
                        <p>
                        In addition to traditional channels, Warwick Creative Studios recognizes the exponential growth of podcast listeners and the potential for ad placements on platforms like Spotify and Apple Podcasts. By capitalizing on this trend, businesses can connect with potential customers who actively engage with podcast content.
                        </p>
                        
                        
                    </div>
                    <div id='photo-column-2'>
                       
                        <p>
                            One crucial aspect of Warwick Creative Studios' ad servicing is the ability to target specific audiences. This targeted approach ensures that ad buys are efficient and result in enhanced engagement and conversion rates. By understanding your target audience's demographics, behaviors, and preferences, Warwick Creative Studios takes the control in creating impactful and personalized ads.
                        </p>
                        <p>
                            Are you ready to take your advertising campaigns to new heights? Contact Warwick Creative Studios today and see how we can help you captivate and engage your target audience.
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



export default AdService