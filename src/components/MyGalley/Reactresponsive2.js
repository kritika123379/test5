import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';
 



export default class Reactresponsive2 extends Component {
    render() {
        return (
            <div>
            <ResponsiveImage>
            <ResponsiveImageSize
              default
              minWidth={0}
              path={'images/house2.jpg'}
            />
            <ResponsiveImageSize
              minWidth={768}
              path={'images/house2.jpg'}
            />
            <ResponsiveImageSize
              minWidth={1100}
              path={'images/house2.jpg'}
            />
          </ResponsiveImage>
             
            </div>
        )
    }
}
