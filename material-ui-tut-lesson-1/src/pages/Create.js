import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core';

const useStyles= makeStyles({
  btn:{
    backgroundColor:'violet',
    fontSize:"3rem",
    '&:hover':{
      backgroundColor:'green'
    }
  },
  title:{
    textDecoration:'underline',
    margin:'1rem'
  }
})

export default function Create() {
  const cssClasess= useStyles();
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

      <Typography className={cssClasess.title} variant="h5">Button with custom styles using makeStyles</Typography>

      <Button
        className={cssClasess.btn}
      >Custom Buttom</Button>
    </div>
  )
}
