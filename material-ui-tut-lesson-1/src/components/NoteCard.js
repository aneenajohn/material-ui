import React from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {IconButton, makeStyles, Typography} from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';

const  useStyles = makeStyles({
    test:{
        border : (note) => {
            if(note.category === "work"){
                return "1px solid red"
            }
        }
    }
})
export default function NoteCard({note,handleDelete}) {
    const {id,title,details,category} = note;
    const classes= useStyles(note);
    return (
        <Container>
            <Card elevation={3} className={classes.test}>
                <CardHeader 
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

