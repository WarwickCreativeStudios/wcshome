import React from "react";
import './image-carousel.css'

const ImgCarousel = () => {
    return(
        <div id='home-images-parent'>
            <div id='rows'>
                <div className="row-1">
                    <img className="work-image-size-1" src='./home-images/Anderson.Paak.jpg'/>
                    <img className="work-image-size-2" src='./home-images/Colosseum_BW.jpg'/>
                    <img className="work-image-size-3" src='./home-images/AAR-1.png'/>
                    <img className="work-image-size-4" src='./home-images/Skylar-2.png'/>
                    <img className="work-image-size-2" src='./home-images/Apigos Nicholas-2 BW.jpg'/>
                    <img className="work-image-size-2" src='./home-images/Runner-1.png'/>
                    <img className="work-image-size-4" src='./home-images/JCole-1.jpg'/>
                    <img className="work-image-size-1" src='./home-images/Santorini_Cropped.png'/>
                    

                    
                </div>
                
                <div className="row-2">
                    <img className="work-image-size-2" src='./home-images/Oia Painted.png'/>
                    <img className="work-image-size-4" src='./home-images/JM-1.jpg'/>
                    <img className="work-image-size-4" src='./home-images/JCole-2.png'/>
                    <img className="work-image-size-4" src='./home-images/Dublin Bricks.jpg'/>
                    <img className="work-image-size-1" src='./home-images/Keee-2.jpg'/>
                    <img className="work-image-size-2" src='./home-images/AAr-2-Cropped.jpg'/>
                    <img className="work-image-size-2" src='./home-images/Skylar-1.png'/>
                    <img className="work-image-size-5" src='./home-images/Skater-2.png'/>
                </div>
            </div> 
        </div>
    )
   
}

export default ImgCarousel