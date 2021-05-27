import React from 'react';
import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import {AccordionDetails, makeStyles} from '@material-ui/core';


const useStyles= makeStyles({
  title:{
    textDecoration:'underline',
    marginTop:'1rem'
  },
  field:{
    margin : "2rem 0rem",
    display: "block"
  }
})

export default function Create() {

  const classes= useStyles();
  // function submitHandler(){
  //   alert('Note submitted successfully');
  // }

  const handleSubmit = (e) =>{
    setTitleError(false);
    setDetailsError(false);
    title === "" && setTitleError(true);
    details === "" && setDetailsError(true);
      e.preventDefault();
      ( (title && details) && (
        console.log("title:", title,"details:",details)
      ))
  }

  const [title,setTitle] = useState("");
  const [details,setDetails] = useState("");
  const [titleError,setTitleError] = useState(false);
  const [detailsError,setDetailsError] = useState(false);
  return (
    <Container>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom
        className={classes.title}
      >
        Create a new note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField className={classes.field}
          onChange={(e)=>setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
        />
        <TextField className={classes.field}
          onChange={(e)=> setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
        />

      <Button type="submit" color="secondary" variant="contained"
        // onClick={()=> submitHandler()}
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>

      </form>
      
    </Container>
  )
}
