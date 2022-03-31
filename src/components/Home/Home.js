import React from "react";
import Header from "../Header/Header"
import ContactForm from "../ContactForm/ContactForm";

import './homecss.css'

const Home = () => {

    return(
        <div id='home'>
           <Header />
           <div id="products">
                <span id='prod-web'><a href="#">Development</a></span>
                <span id='prod-space-1' className="prod-space"><li></li></span>
                <span id='prod-post'><a href="#">Post Production</a></span>
                <span id='prod-space-2' className="prod-space"><li></li></span>
                <span id='prod-phot'><a href="#">Photography</a></span>
           </div>

           <div id="welcome-message">
               <h1 className="text-center">Welcome To Warwick Creative Studios</h1>
               <h4 className="text-center">The Hudson Valley's Creative Agency</h4>
               <p className="text-center">We specialize in developing web sites, web apps, iOS apps and creating materials to help support your buisness and so much more </p>
           </div>

           <ContactForm />
        </div>
    )
}

export default Home