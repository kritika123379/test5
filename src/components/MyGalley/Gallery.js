import React, { Component } from 'react';




class Gallery extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                  
                    <div className= "container" style={{marginTop:"0px",paddingTop:"10px"}}>
                    <h4 style={{color:"Blue"}}>Gallery</h4>
                    <div className="gallery">
                    <a target="_blank" href="images/img1.jpg">
                    <img src="images/img3.jpg" alt="Northern Lights" width="500" height="300"/>
                    </a>
                    <div className="desc" >Add a description of the image here</div>
                  </div>
                  
                  <div className="gallery">
                    <a target="_blank" href="images/img2.jpg">
                    <img src="images/img3.jpg" alt="Northern Lights" width="500" height="300"/>
                    </a>
                    <div className="desc" style={{backgroundColor:"white"}}>Add a description of the image here</div>
                  </div>
                  
                  <div className="gallery">
                    <a target="_blank" href="img_lights.jpg">
                      <img src="images/img3.jpg" alt="Northern Lights" width="500" height="300"/>
                    </a>
                    <div className="desc">Add a description of the image here</div>
                  </div>
                  
                  <div className="gallery">
                    <a target="_blank" href="img_mountains.jpg">
                      <img src="images/img4.jpg" alt="Mountains" width="500" height="300"/>
                    </a>
                    <div className="desc">Add a description of the image here</div>
                  </div>
                  </div>
                  
                    
                </React.Fragment>
            </div>
        );
    }
}

export default Gallery;
