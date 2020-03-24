import React from 'react'
import Carousel from "./Carousel";

import "./Carousel.css";


function Featured() {
    return (
        <div style={{position:"relative"}}>
            
                <Carousel/>

            <div className="artist_name">
            <div className="wrapper">
            <div className="centered">
            <h1>UNFORGETTABLE EXPIERIENCE</h1>
            <h2>A unique gateway is  not  World of a UnParallel luxery</h2>
            <button className="mybutton">Book Now</button><br/>
            </div>
            </div><br/><br/>
                
                </div>
        </div>
    )
}

export default Featured
