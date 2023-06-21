import React from "react";
import Header from "../Header/Header"
import ContactForm from "../ContactForm/ContactForm";

import './homecss.css'

const Home = () => {

    return(
        <div id='home'>
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

           <div id="welcome-message">
               <h1 className="text-center">Welcome To Warwick Creative Studios</h1>
               <h3 className="text-center">The One-Stop-Shop For All Your Media Needs</h3>
               <h3 className="text-center">From Beginning To End And Everything In Between</h3>
           </div>

           <div className="space"></div>

           <div id="contact">
                <h2 className="text-center">Visit us on Instagram!</h2> 
                <a href='https://www.instagram.com/warwickcreativestudios/'><img className="ig-logo" src='—Pngtree—instagram icon instagram logo_3584853.png'></img></a>
                <h3 className="text-center">Use the button or form below to email us for a free consultation</h3>
                <a href="mailto:john@warwickcreativestudios.com">
                    <div id="contact-box">
                    <p>Contact</p>
                    </div>
                </a>
                
           </div>

           <ContactForm />
           <div className="space"></div>

        </div>
    )
}

export default Home