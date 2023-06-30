import React from "react";
import './image-carousel.css'

const ImgCarousel = () => {
    return(
        <div id='home-images-parent'>
            <div id='rows'>
                <div className="row-1">
                    <img className="work-image" src='./home-images/Cabazon.png'/>
                    <img id='paak' className="work-image" src='./home-images/Anderson.Paak.jpg'/>
                    <img id='col-bw'className="work-image" src='./home-images/Colosseum_BW.jpg'/>
                    <img id='aar-1'className="work-image" src='./home-images/AAR-1.png'/>
                    <img id='skylar-2'className="work-image" src='./home-images/Skylar-2.png'/>
                    <img id='apigos-2-bw'className="work-image" src='./home-images/Apigos Nicholas-2 BW.jpg'/>
                    <img id='runner'className="work-image" src='./home-images/Runner-1.png'/>
                    <img id='jcole-1'className="work-image" src='./home-images/JCole-1.jpg'/>
                    <img id='santorini' className="work-image" src='./home-images/Santorini_Cropped.png'/> 
                    

                    
                </div>
                
                <div className="row-2">
                    <img id='painted' className="work-image" src='./home-images/Oia Painted.png'/>
                    <img id='jm-1' className="work-image" src='./home-images/JM-1.jpg'/>
                    <img id='jcole-2' className="work-image" src='./home-images/JCole-2.png'/>
                    <img id='dub-bricks' className="work-image" src='./home-images/Dublin Bricks.jpg'/>
                    <img id='keke' className="work-image" src='./home-images/Keke-2.jpg'/>
                    <img id='aar-2' className="work-image" src='./home-images/AAr-2-Cropped.jpg'/>
                    <img id='skylar-2' className="work-image" src='./home-images/Skylar-1.png'/>
                    <img id='skater-2' className="work-image" src='./home-images/Skater-2.png'/> 
                </div>
            </div> 
        </div>
    )
   
}

export default ImgCarousel