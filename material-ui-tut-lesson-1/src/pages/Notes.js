import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import { makeStyles} from '@material-ui/core';
import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';

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
      const {data} = await axios.get("https://lit-lake-31949.herokuapp.com/");
      setNotes(data.data.notesDB.notes);
      console.log(data.data.notesDB.notes);
    })()
  }, [])

  const handleDelete = async (id) => {
    await axios.delete("https://lit-lake-31949.herokuapp.com/"+id);
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
  }
  const breakpointColumnsObj={
    default: 3,
    1100: 2,
    700: 2,
    500: 1
  }
  return (
    <Container>
      <Masonry  breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
        {notes.map(note => (
          <div key={note.id} xs={12} sm={6} md={6} lg={4}> 
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  )
}
