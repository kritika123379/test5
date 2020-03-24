import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';


export class Bottom extends Component {
    render() {
        return (
            <div>
            <AppBar position="static"
            style={{backgroundColor:"black",
        paddingTop:"20px",
        paddingBottom:"20px",
        alignItems:"center"
        }}>
        Home      |About     | Mansion     | Frog and Toad grounds    | Options    |Gallery     | Availability    |Diy Wedding     | Contact
            </AppBar>  
            
            <AppBar position="static"
            style={{backgroundColor:"black",
        paddingTop:"20px",
        paddingBottom:"20px",
        alignItems:"center"
        }}>
        &copy;2016 All Rights reserved Alawara
            </AppBar>   
            </div>
        )
    }
}

export default Bottom
