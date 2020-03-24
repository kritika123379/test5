import React from 'react'

function Location() {
    return (
        <div className="location_wrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.326698697624!2d76.69300321497485!3d30.709214781645468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee8500746ffd%3A0xb8cd610a9c6e9d4d!2sSPINEOR!5e0!3m2!1sen!2sin!4v1584939198285!5m2!1sen!2sin" 
        width="100%" 
        height="450px" 
        frameBorder="0"
         allowFullScreen="" 
         aria-hidden="false"></iframe>
           <div className="location_tag">
           <div>Location</div>
           </div> 
        </div>
    )
}

export default Location
