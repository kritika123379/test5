import React, { Component } from 'react';
import "./Content.css";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



class Cards extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
              
                <Grid container spacing={3} style={{marginBottom:"40px",marginLeft:"40px",marginRight:"40px",marginTop:"150px",backgroundColor:"lightgrey"}}>
        <Grid item xs><h2>Special <br/><i style={{color:"blue"}} className="fas fa-air-freshener"></i> Activities</h2>
          <Paper style={{backgroundColor:"lightgrey"}} ><p>Donec sodales sagittis  magna .Sad consequat ,leo egatApplying padding to the parent with at least half the spacing value applied to the child:</p></Paper>
        </Grid>
        <Grid item xs><h2>Travel <br/> <span><i style={{color:"blue"}} className="fas fa-plane"></i></span>Arrangements</h2>
          <Paper style={{backgroundColor:"lightgrey"}}> <p >Donec sodales sagittis  magna .Sad consequat ,leo egat Applying padding to the parent with at least half the spacing value applied to the child:</p>
          </Paper>
        </Grid>
        <Grid item xs><h2>Private <br/><span><i style={{color:"blue"}} className="fas fa-user"></i></span> Guide</h2>
          <Paper style={{backgroundColor:"lightgrey"}}>  <p>Donec sodales sagittis  magna .Sad consequat ,leo egat Applying padding to the parent with at least half the spacing value applied to the child:</p>
          </Paper>
        </Grid>
        <Grid item xs><h2>Private <br/><span><i style={{color:"blue"}} className="fab fa-gg-circle"></i></span> Guide</h2>
          <Paper style={{backgroundColor:"lightgrey"}}>  <p>Donec sodales sagittis  magna .Sad consequat ,leo egat Applying padding to the parent with at least half the spacing value applied to the child:</p>
          </Paper>
        </Grid>
      </Grid>
                         
                </React.Fragment>
            </div>
        );
    }
}

export default Cards;
