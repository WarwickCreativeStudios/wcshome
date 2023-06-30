import React from "react";
import './aboutcss.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";


const About = () =>{
    return(
        <div id='home'>
            <div id='about-body'>
                <Header />
              
                <div id='about-columns'>
                    <div id='about-column-1'>
                        <p>
                            Warwick Creative Studios is a full-service creative agency located in the scenic Hudson Valley region of New York.
                            The agency offers a wide range of services, including video & audio production, web development, photography, ad servicing, and more.  Providing personalized service to each client, ensuring that their unique needs and goals are met.
                        </p>
                        <img id='aar-shoot' className="about-image" src='./home-images/photo 4.JPG' />

                    </div>
                    <div id='about-column-2'>
                        <div >
                            <img id='head-shot' className="about-image" src='./home-images/JH-headshot.jpg'></img>
                        </div>
                        <p>
                            With over 20 years of experience in the industry, John Hayes the owner and proprietor of Warwick Creative Studios,  has the ability and expertise bring ideas to life. Whether it's creating engaging content or servicing your ads, Warwick Creative Studios is dedicated to delivering results that exceed expectations.
                        </p>
                        <p>
                            If you're looking for a creative partner to help take your business to the next level, look no further than Warwick Creative Studios
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

export default About