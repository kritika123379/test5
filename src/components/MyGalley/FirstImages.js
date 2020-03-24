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
      <MDBRow className="card_wrapper"  style={{marginTop:"250px",marginBottom:"80px"}}>
     
      <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-indigo-strong py-5 px-4">
              <div>
                <h5 className="orange-text">
                  <MDBIcon icon="desktop" /> Grounds
                </h5>
                <MDBCardTitle tag="h3" className="pt-2">
                  <strong>The Grounds</strong>
                </MDBCardTitle>
                <p>
                 The Grounds are very estate site on over 2 acres of Flat.
                 
                </p>
                
              </div>
            </div>
            <h5 style={{textAlign:"center",marginTop:"1px"}}> The Grounds</h5>
            Do IT Yourself Weddings At  The alawara Mention.
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/Work/4-col/img%20%2814%29.jpg')"
            }}
          >
            <div className="text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4">
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
            <h5 style={{textAlign:"center",marginTop:"1px"}}> Bedrooms</h5>
            All Lates Room Features available At  The alawara Mention.
          </MDBCard>
        </MDBCol>
        <MDBCol>
          <MDBCard
            className="card-image"
            style={{
              backgroundImage:
                "url('https://mdbootstrap.com/img/Photos/Horizontal/City/6-col/img%20(47).jpg')"
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
                 
                </p>
                
              </div>
            </div>
               <h5 style={{textAlign:"center",marginTop:"1px"}}> DIY Weddings</h5>
            Do IT Yourself Weddings At  The alawara Mention.
          </MDBCard>
        </MDBCol>
         
      </MDBRow>
    );
  }
}

export default FirstImages