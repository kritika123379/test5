import React, { Component } from 'react';
import "./Content.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



class Cards extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
              
                <Grid container spacing={3} style={{marginBottom:"40px",marginLeft:"70px",marginRight:"200px",marginTop:"100px",backgroundColor:"lightgrey",alignItems:"center",alignContent:"center"}}>
        <Grid item xs><h2>Special <br/><span style={{backgroundColor:"blue",padding:"1px"}}><i style={{color:"white"}} className="fas fa-air-freshener"></i></span> Activities</h2>
          <p style={{backgroundColor:"lightgrey",textAlign:"center"}} ><p>Donec sodales sagittis  magna .Sad consequat ,leo egatApplying padding to value applied to the child:</p></p>
        </Grid>
        <Grid item xs style={{paddingLeft:"5px",paddingRight:"5px"}} ><h2>Travel <br/> <span><i style={{color:"blue"}} className="fas fa-plane"></i></span>Arrangements</h2>
          <p style={{backgroundColor:"lightgrey"}}> <p >Donec sodales sagittis  magna .Sad consequat ,leo egat Applying value applied to the child:</p>
          </p>
        </Grid>
        <Grid item xs style={{paddingLeft:"5px",paddingRight:"5px"}} ><h2>Private <br/><span><i style={{color:"blue"}} className="fas fa-user"></i></span> Guide</h2>
          <p style={{backgroundColor:"lightgrey"}}>  <p>Donec sodales sagittis  magna .Sad consequat ,leo egat Applying  spacing value applied to the child:</p>
          </p>
        </Grid>
        <Grid item xs style={{paddingLeft:"5px",paddingRight:"5px"}}><h2>Private <br/><span><i style={{color:"blue"}} className="fab fa-gg-circle"></i></span> Guide</h2>
          <p style={{backgroundColor:"lightgrey"}}>  <p>Donec sodales sagittis  magna at least half the spacing value applied to the child:</p>
          </p>
        </Grid>
      </Grid>
                         
                </React.Fragment>
            </div>
        );
    }
}

export default Cards;
