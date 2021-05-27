import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Notes() {
  const [notes,setNotes]= useState([]);
  useEffect(() => {
    ( async function(){
      const {data} = await axios.get("http://localhost:8000/notes");
      setNotes(data);
      // console.log(data);
    })()
  }, [])
  return (
    <div>
      <Typography>Notes</Typography>
      <Grid container>
        <Grid item xs={12} sm={6} md={3}>1</Grid>
        <Grid item xs={12} sm={6} md={3}>2</Grid>
        <Grid item xs={12} sm={6} md={3}>3</Grid>
        <Grid item xs={12} sm={6} md={3}>4</Grid>
        <Grid item xs={12} sm={6} md={3}>5</Grid>
        <Grid item xs={12} sm={6} md={3}>6</Grid>
      </Grid>
      {notes.map(note => (
        <Typography>{note.title}</Typography>
      ))}
    </div>
  )
}
