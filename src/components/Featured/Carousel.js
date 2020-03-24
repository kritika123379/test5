import React from 'react'
import slide_one from "../../resources/images/house2.jpg";
import slide_two from "../../resources/images/house1.jpg";
import slide_three from "../../resources/images/house1.jpg";
import Navbar from '../Myheader/Navbar';


function Carousel() {


    return (
        <div className="carousel_wrapper"
        style ={{overflow:"hidden",height:`${window.innerHeight}px`,background:"red"}}>
     
             <div>
                <div
                 className="carrousel_image"
                style={{backgroundImage:`url(${slide_one})`,
                height:`${window.innerHeight}px`}}>
                <Navbar/>
                
                </div>
             </div>
             <div>
             <div
                 className="carrousel_image"
                style={{backgroundImage:`url(${slide_two})`,
                height:`${window.innerHeight}px`}}>
                <Navbar/>
                
                </div>
             </div>
             <div>
             <div
                 className="carrousel_image"
                style={{backgroundImage:`url(${slide_three})`,
                height:`${window.innerHeight}px`}}>
                <Navbar/>
                </div>
             </div>
    
        </div>
    )
}

export default Carousel
