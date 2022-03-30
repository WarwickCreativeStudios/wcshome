import React from "react";
import Header from "../Header/Header";
import './homecss.css'

const Home = () => {

    return(
        <div id='home'>
           <Header />
           <div id="products">
                <span id='prod-web'>Web Development</span>
                <span className="prod-space">x</span>
                <span id='prod-post'>Post Production</span>
                <span className="prod-space">x</span>
                <span id='prod-phot'>Photography</span>
           </div>
        </div>
    )
}

export default Home