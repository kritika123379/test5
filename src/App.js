import React from 'react';

import Content from './components/MyContent';
import MyGallery from './components/MyGalley';
import Footer from './components/Footer';
import Myheader from './components/Myheader';
import Testinomial from './components/Testinomial';
import Featured from './components/Featured';
import Form from './components/Form';
import MyContent from "./components/MyContent";
import Slider from './components/Myheader/Slider';

function App() {
  return (
    <div className="App">
    <Myheader/>
  
    <Featured/>
    <Slider/>
    <MyGallery/>
    <MyContent/>
  
   
    {/* <Myheader/>
     <Featured/>
      
     <MyContent/>*/}
      
      <Testinomial/>
    
      <Footer/>
  

    </div>
  );
}

export default App;
