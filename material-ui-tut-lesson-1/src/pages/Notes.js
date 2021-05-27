import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles} from '@material-ui/core';
import NoteCard from '../components/NoteCard';

const useStyles = makeStyles({
  title:{
    margin:'1rem 0',
  }
})
export default function Notes() {
  const [notes,setNotes]= useState([]);
  const classes = useStyles();
  useEffect(() => {
    ( async function(){
      const {data} = await axios.get("http://localhost:8000/notes");
      setNotes(data);
      // console.log(data);
    })()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete("http://localhost:8000/notes/"+id);
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <Container>
      {/* <Typography className={classes.title} variant="h5">Notes</Typography> */}
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>1</Grid>
        <Grid item xs={12} sm={6} md={3}>2</Grid>
        <Grid item xs={12} sm={6} md={3}>3</Grid>
        <Grid item xs={12} sm={6} md={3}>4</Grid>
        <Grid item xs={12} sm={6} md={3}>5</Grid>
        <Grid item xs={12} sm={6} md={3}>6</Grid>
      </Grid> */}
      <Grid container spacing={3}>
        {notes.map(note => (
          <Grid item key={note.id} xs={12} sm={6} md={6} lg={4}> 
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
