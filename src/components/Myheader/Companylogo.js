import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';


export default class Companylogo extends Component {
    render() {
        return (
            <div>
                

               <AppBar position="static"
            style={{backgroundColor:"white",padding:"40px",color:"Black"}}>
             <h1>Company Logo</h1>
             <div style={{ color: "black" ,position:"absolute",right:'450px'}}>
             
             <p><span>
             <i class="fas fa-map-marker-alt"></i></span>Alawara Mension<br/>
             9 Alawara Dr,Tallai QLD 4213,Australia</p>
             </div>
             <br/>
             <h3 style={{ color: "black" ,position:"absolute",right:'150px'}}><span><i class="fas fa-phone-volume"></i></span>           913564346673 <br/>info@Alawara.com</h3><br/> 
             
             
             </AppBar>
            </div>
        )
    }
}
