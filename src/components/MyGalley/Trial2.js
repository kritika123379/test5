import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class MasksPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5" className="d-flex flex-row">
        
          <MDBCol md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt=""  />
          </MDBCol>
    
        
          <MDBCol md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
          </MDBCol>
        
          <MDBCol md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
          </MDBCol>

          <MDBCol md="4" className="mb-4">
            <img src="https://mdbootstrap.com/img/Others/documentation/1.jpg" className="img-fluid" alt="" />
          </MDBCol>
        
      </MDBContainer>
    );
  }
}

export default MasksPage;