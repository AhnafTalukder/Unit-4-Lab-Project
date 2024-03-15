import react from "react";
import { useState } from "react";
import './ImageGallery.css'

import image1 from "../assets/1.jpg"
import image2 from "../assets/2.jpg"
import image3 from "../assets/3.jpg"
import image4 from "../assets/4.jpg"
import image5 from "../assets/5.jpg"

const ImageGallery = (props) =>{


  const renderGallery = props.gallery.map(images => 
    <img src={images.primaryimageurl} alt="" />
  )
  
  
  

    return(
        <>
       
       <p id="title">My Gallery</p>
   
        
          
      

        <div className="image-container">
          
         
        {renderGallery}


    
        
        </div>
        </>
    )
}

export default ImageGallery;