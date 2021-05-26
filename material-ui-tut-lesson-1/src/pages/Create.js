import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {makeStyles} from '@material-ui/core';


const useStyles= makeStyles({
  title:{
    textDecoration:'underline',
    marginTop:'1rem'
  }
})

export default function Create() {

  const classes= useStyles();
  function submitHandler(){
    alert('Note submitted successfully');
  }
  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom
        className={classes.title}
      >
        Create a new note
      </Typography>
      <Button type="submit" color="secondary" variant="contained"
        onClick={()=> submitHandler()}
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
    </Container>
  )
}
