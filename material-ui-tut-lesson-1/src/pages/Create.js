import React from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';


export default function Create() {
  function submitHandler(){
    alert('Note submitted successfully');
  }
  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Create a new note
      </Typography>
      <Button type="submit" color="secondary" variant="contained"
        onClick={()=> submitHandler()}
      >
        Submit
      </Button>
    </Container>
  )
}
