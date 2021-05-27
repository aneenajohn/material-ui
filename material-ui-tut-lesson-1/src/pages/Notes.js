import React from 'react'
import axios from 'axios';
import {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';

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
      {notes.map(note => (
        <Typography>{note.title}</Typography>
      ))}
    </div>
  )
}
