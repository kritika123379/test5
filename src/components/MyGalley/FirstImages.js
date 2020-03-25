import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBIcon
} from "mdbreact";


class FirstImages extends Component {
  
  render() {
    return (
      <div>
      <MDBRow className="card_wrapper"  
      style={{
        marginTop:"250px",
        marginBottom:"150px",
      
      }}>
  
      <MDBCol style={{width:"100px", height:"100px"}}>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('images/house2.jpg')"
              }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-5 ">
              <div>
                <h5 className="orange-text">
                  <MDBIcon icon="desktop" /> Grounds
                </h5>
                <MDBCardTitle tag="h3" className="pt-2" >
                  <strong >The Grounds</strong>
                </MDBCardTitle>
                <p >
                 The Grounds are very estate site on over 2 acres of Flat.
                 
                </p>
                
              </div>
            </div>
            <div style={{textAlign:"center",marginTop:"1px",backgroundColor:"white",padding:"20px"}}>
            <h5 > The Grounds</h5>
            <p style={{backgroundColor:"white"}}> Do IT Yourself Weddings At  The alawara Mention.</p>
            </div>
            </MDBCard>
        </MDBCol>
  

        <MDBCol  style={{width:"100px", height:"100px"}}>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')",
                
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-4 px-5">
              <div>
                <h5 className="pink-text">
                  <MDBIcon icon="chart-pie"/> Bedrooms
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>Weddings</strong>
                </MDBCardTitle>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                 
                </p>
               
                <MDBBtn color="blue">
                  <MDBIcon icon="clone left" /> Book Now
                </MDBBtn>
              </div>
            
            </div>
            <div style={{textAlign:"center",marginTop:"1px",backgroundColor:"white",padding:"17px"}}>
            <h5 > The Grounds</h5>
            <p style={{backgroundColor:"white",}}> Do IT Yourself Weddings At  The alawara Mention.</p>
            </div>
          </MDBCard>
        </MDBCol>
      
      
        <MDBCol style={{width:"100px", height:"100px"}}> 
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('images/house2.jpg')" 
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
              <div>
                <h5 className="orange-text">
                  <MDBIcon icon="desktop" />Weddings
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong> DIY Weddings</strong>
                </MDBCardTitle>
                <p>
                 Do it YourSelF Weddings At Alawara Mention.
                 The alawara Mention
                 
                </p>
                
              </div>
            </div>
            <div style={{textAlign:"center",marginTop:"1px",backgroundColor:"white",padding:"20px"}}>
            <h5 > The Grounds</h5>
            <p style={{backgroundColor:"white",}}> Do IT Yourself Weddings At  The alawara Mention The alawara Mention.</p>
            </div>
          </MDBCard>
        </MDBCol>
      
         
      </MDBRow>
      </div>
    );
  }
}

export default FirstImages