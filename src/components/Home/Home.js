import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";
import ImgCarousel from "../ImageCarousel/ImageCarousel";

import './homecss.css'

const Home = () => {

    return(
        <div id='home'>
            <div>
                <Header />

                <img id='logo' src='WCS-Mtns-LogoForWeb.png'></img>
                <div id='prod-items'>
                    <div id="products">
                            <span id='prod-post'><a href="#">Production</a></span>
                            <span id='prod-space-1' className="prod-space"><li></li></span>
                            <span id='prod-web'><a href="#">Web Solutions</a></span>             
                            <span id='prod-space-2' className="prod-space"><li></li></span>
                            <span id='prod-phot'><a href="#">Photography</a></span>
                            <span id='prod-space-3' className="prod-space"><li></li></span>
                            <span id='prod-serv'><a href="#">Ad Servicing</a></span>
                    </div>
                </div>

                <ImgCarousel />
                
                <div className="seperation"></div>

                <div id="welcome-message">
                    <h1 className="text-center">Welcome To Warwick Creative Studios</h1>
                    <h2 className="text-center">Concept to Creation</h2>
                    <h2 className="text-center">And So Much More!</h2>
                    <p>
                    Warwick Creative Studios is a creative agency located in the Hudson Valley region of New York that specializes in 
                    creating marketing materials and getting ads seen for our clients.</p>
                    <p>We offer a range of services including video production, photography, audio production and ad servicing. 
                    Our goal is to help you grow by providing high-quality creative services that engage and inspire your target audience.

                    </p>
                </div>

                <div className="seperation"></div>

                <div className="space"></div>

                <div id="contact">
                    <h2 className="text-center">Visit us on Instagram!</h2> 
                    <a href='https://www.instagram.com/warwickcreativestudios/'><img className="ig-logo" src='—Pngtree—instagram icon instagram logo_3584853.png'></img></a>
                    
                    <div className="seperation-2"></div>
                    
                    <h1 className='text-center'>Contact Us</h1>
                    {/* <h2 className='text-center'>We Want To Hear From You!</h2> */}
                    <h3 className="text-center">Use the button or form below to email us for a free consultation</h3>
                    <a href="mailto:contact@warwickcreativestudios.com">
                        <div id="contact-box">
                        <p>Contact</p>
                        </div>
                    </a>
                    
                </div>

                <ContactForm />
                <div className="space"></div>

            </div>
          
            <Footer />
        </div>
    )
}

export default Home