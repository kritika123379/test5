import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';


export class Topstrip extends Component {
    render() {
        return (
            <div>
                <AppBar position="static"
                    style={{
                        backgroundColor: "black",
                        padding: "20px"
                    }}>
                    Get in Touch with Us

            <span style={{ position: "absolute", left: "400px" }}><i class="fas fa-phone"></i>021-2598438952</span>
                    <span style={{ position: "absolute", left: "600px" }}><i class="far fa-envelope"></i>    info@getqt.com</span>

                    <span style={{ color: "white", position: "absolute", right: '90px' }}> <i class="fab fa-facebook-f"></i></span>
                    <span style={{ color: "white", position: "absolute", right: '60px' }}><i class="fab fa-twitter"></i></span>
                    <span style={{ color: "white", position: "absolute", right: '30px' }}><i class="fab fa-linkedin-in"></i></span>

                </AppBar>
            </div>
        )
    }
}

export default Topstrip
