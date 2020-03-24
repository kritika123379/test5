import React from 'react'
import Topstrip from "./Topstrip";
import Location from './Location';
import Bottom from './Bottom';
import "./Footer.css";

function Footer() {
    return (
        <div style={{marginTop:"450px"}}>
            <Topstrip/>
            <Location/>
            <Bottom/>
        </div>
    )
}

export default Footer
