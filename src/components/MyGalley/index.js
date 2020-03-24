import React from 'react'
import FirstImages from "./FirstImages";
import Text from "./Text";
import "./Mygallery.css"
import Gallery from './Gallery';

function MyGallery() {
    return (
        <div>
            <FirstImages/>
            <Gallery/>
            <Text/>
        </div>
    )
}

export default MyGallery
