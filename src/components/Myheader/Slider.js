import React from "react";
import { MDBRow, MDBCol,   MDBContainer } from "mdbreact";




class Slider extends React.Component {

render() {
return (
<div>

  <MDBContainer style={{backgroundColor:"white"}}>
    
    <MDBRow className="pt-5 pb-4" style={{marginTop:"20px",marginBottom:"50px",backgroundColor:"white"}}>
      
      <MDBCol md="12" className="text-center">
      <h3 style={{color:"blue"}}>Welcome To The Alawara Mention</h3><br/>
        <p>
         
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
  
</div>
);
}
}

export default Slider;