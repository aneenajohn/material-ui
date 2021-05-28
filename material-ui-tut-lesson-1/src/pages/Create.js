import React from 'react';
import axios from 'axios';
import {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, FormControlLabel, FormLabel, makeStyles } from '@material-ui/core';


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

const notify = () => toast.info("Added to your notes" ,{
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true});

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
      ( (title && details && category) && (
        (async function(){
          await axios.post('http://localhost:8000/notes',{
            title,details,category
          })
          console.log({"title":title,"details":details, "category":category})
        })()
      ))
  }

  const [title,setTitle] = useState("");
  const [details,setDetails] = useState("");
  const [titleError,setTitleError] = useState(false);
  const [detailsError,setDetailsError] = useState(false);
  const [category,setCategory] = useState("Todos");
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

        <FormControl className={classes.field} >
          <FormLabel color="primary">Note Category</FormLabel>  
          <RadioGroup value={category} onChange={(e)=> setCategory(e.target.value)}>
            <FormControlLabel control={<Radio/>} label="Todos" value="Todos"/>
            <FormControlLabel control={<Radio/>} label="Reminders" value="Reminders"/>
            <FormControlLabel control={<Radio/>} label="Appointments" value="Appointments"/>
            <FormControlLabel control={<Radio/>} label="Work" value="Work"/>
          </RadioGroup>
        </FormControl>

      <Button type="submit" color="primary" variant="contained"
        onClick={()=> notify()}
        endIcon={<KeyboardArrowRightIcon/>}
      >
        Submit
      </Button>
      <ToastContainer />
      </form>
      
    </Container>
  )
}
