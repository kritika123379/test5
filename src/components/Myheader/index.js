import React, { Component } from 'react'
import Top from "./Top";
import Companylogo from "./Companylogo";

import "./Header.css";
import Slider from "./Slider";

export default class Myheader extends Component {
    render() {
        return (
            <div>
                <Top/>
                <Companylogo/>
                    <Slider/>
                    <Slider/>
                    
            </div>
        )
    }
}
