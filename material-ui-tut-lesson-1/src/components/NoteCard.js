import React from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import {IconButton, makeStyles, Typography} from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';
import { blue, green, pink, purple, yellow } from '@material-ui/core/colors';

const  useStyles = makeStyles({
    avatar:{
        backgroundColor : (note) => {
            if(note.category === "Work"){
                return yellow[700]
            }
            else if(note.category === "Reminders"){
                return green[500]
            }
            else if(note.category === "Todos"){
                return pink[500]
            }
            else if(note.category === "Appointments"){
                return purple[500]
            }
            else return blue[500]
        }
    }
})
export default function NoteCard({note,handleDelete}) {
    const {id,title,details,category} = note;
    const classes= useStyles(note);
    return (
        <Container>
            <Card elevation={3} >
                <CardHeader 
                    avatar={
                        <Avatar className={classes.avatar}>{category[0].toUpperCase()}</Avatar>
                    }
                    action={
                    <IconButton aria-label="settings"
                        onClick={()=>handleDelete(id)}
                    >
                    <DeleteOutlined />
                    </IconButton>
                    }
                    title={title}
                    subheader={category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">{details}</Typography>
                </CardContent>
            </Card>
        </Container>
    )
}

