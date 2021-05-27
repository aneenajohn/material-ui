import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Create() {
  function clickHandler(){
    alert("Form submitted successfully");
  }
  return (
    <div>
      <Button type="submit" color="secondary" 
        onClick={()=> clickHandler()}
      >
        Submit
      </Button>
      <Button color="primary" variant="contained">
        Home
      </Button>
      <Button color="primary" variant="outlined" disableElevation>
        About
      </Button>
      <ButtonGroup color="secondary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>1</Grid>
        <Grid item xs={12} sm={6} md={3}>2</Grid>
        <Grid item xs={12} sm={6} md={3}>3</Grid>
        <Grid item xs={12} sm={6} md={3}>4</Grid>
        <Grid item xs={12} sm={6} md={3}>5</Grid>
        <Grid item xs={12} sm={6} md={3}>6</Grid>
      </Grid>
    </div>
  )
}
