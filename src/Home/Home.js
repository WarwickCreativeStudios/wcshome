import React from "react";
import Header from "../Header/Header";
import './homecss.css'

const Home = () => {

    return(
        <div id='home'>
           <Header />
           <div id="products">
                <span id='prod-web'><a href="#">Web Development</a></span>
                <span id='prod-space-1' className="prod-space"><li></li></span>
                <span id='prod-post'><a href="#">Post Production</a></span>
                <span id='prod-space-2' className="prod-space"><li></li></span>
                <span id='prod-phot'><a href="#">Photography</a></span>
           </div>
        </div>
    )
}

export default Home