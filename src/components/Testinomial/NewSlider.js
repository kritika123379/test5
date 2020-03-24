import React, { Component } from 'react'



export class NewSlider extends Component {
    
    render() {
        
        return (
            <div>
        
            <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                    
                        <div className="carousel-inner text-center">

                            <div className="item">
                                <blockquote>
                                    <div className="row">
                                        <div className="col-sm-8 col-sm-offset-2">
                                            <h3 style={{color:"blue"}}>Client Testinomial</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. .</p>
                                            <small>Baryan Charles</small>
                                            
                                        </div>
                                       
                                    </div>
                                    <span style={{color:"blue" }}><i class="fas fa-ellipsis-h fa-3x"></i></span>
                                </blockquote>
                            </div>

                        </div>
                    </div>
                </div>
                <div className ="col-md-4">
                    <h3 style={{color:"green"}}>Weekly NewsLetter</h3>
                   <div style={{backgroundColor:"black",padding:"50px",color:"white"}}>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore  tempor incididunt ut labore .
                        <input type="text" placeholder="Your Email"/>
                        <button style={{backgroundColor:"blue"}}>Send Me</button>

                   </div>
                </div>
            </div>
        </div>
    
            </div>
        )
    }
}

export default NewSlider
