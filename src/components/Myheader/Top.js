import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';


export default class Top extends Component {
    render() {
        return (
            <div>
            <AppBar position="static"
            style={{backgroundColor:"black",
        padding:"20px"
        }}>
            Welcome to me alawara Mension is a unique Gold Coast Estate
           <span style={{ color: "white" ,position:"absolute",right:'100px'}}> <i class="fab fa-facebook-f"></i></span>
            <span style={{ color: "white" ,position:"absolute",right:'70px'}}><i class="fab fa-twitter"></i></span>
            <span style={{ color: "white" ,position:"absolute",right:'40px'}}><i class="fab fa-linkedin-in"></i></span>
            <span style={{ color: "white" ,position:"absolute",right:' 20px'}}><i class="fas fa-camera"></i></span>
            </AppBar>  
            </div>
        )
    }
}
