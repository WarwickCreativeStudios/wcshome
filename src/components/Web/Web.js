import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ContactForm from "../ContactForm/ContactForm";

import './webcss.css'


const Web = () =>{
    return(
        <div id='home'> 
            <div id="photo-body">
                <Header />
                <div className="title-content">
                    <h3>
                        <span>Warwick Creative Studios is your go-to partner for all your web and technology needs. </span> <span>With our expertise and dedication, we offer a wide range of solutions to help and support businesses</span> <span> as they harness the power of technology and propel their success.
 </span>
                    </h3>
                </div>
                <div className="top-images">
                    <img id='coloring' className='photo-image'src='./dev-images/dev-1.png'></img>
                    {/* <img id='ae' className='photo-image'src='./dev-images/dev-2.png'></img> */}
                </div>
                <div id='photo-columns'>
                    
                    <div id='photo-column-1'>
                        
                        <p>
                        One of the core services provided by Warwick Creative Studios is website development. We excel in building visually appealing and functional websites that not only capture your brand's essence but also provide a seamless user experience. Additionally, we can integrate third-party software and applications, ensuring smooth workflows and optimizing your business processes.
                        </p>
                        
                        
                    </div>
                    <div id='photo-column-2'>
                        
                        <p>
                        What sets Warwick Creative Studios apart is our ability to create custom software and applications. We understand that each business is unique. By leveraging their technical prowess, we develop tailored solutions that automate and streamline your specific processes. This helps you save time, increase efficiency, and achieve your business goals more effectively.
                        </p>
                        <p>
                        Don't hesitate to reach out and inquire about our expertise. Empower your business with the right technology partner today.
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



export default Web