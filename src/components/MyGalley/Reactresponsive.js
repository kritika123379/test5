import React from 'react'
import { render } from 'react-dom';
import ResponsiveGallery from 'react-responsive-gallery';

const images=[
    {
      src: 'https://cdn.pixabay.com/photo/2017/01/14/12/59/iceland-1979445_960_720.jpg'
        
    },
    {
      src: 'images/house1.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2018/03/31/06/31/dog-3277416_960_720.jpg'
    },
    {
      src: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg'
    },
    
  ];


function Reactresponsive() {
    return (
        <div>
           
        <div  style={{paddingLeft:"160px"}}>
        <h4 style={{color:"blue",textUnderline:"black"}}>Gallery</h4>
        <ResponsiveGallery imageMaxWidth={"l: 100"} screenWidthSizes ={"s:600"}images={images}  colsPadding={'xl: 4'}imagesPaddingBottom={"xxl:4"}imagesPaddingLeft={"xs:4"}/>  
        </div>
        </div>
    )
}

export default Reactresponsive
