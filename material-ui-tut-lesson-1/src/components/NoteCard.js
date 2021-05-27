import React from 'react'
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import {IconButton, Typography} from '@material-ui/core';
import {DeleteOutlined} from '@material-ui/icons';

export default function NoteCard({note,handleDelete}) {
    const {id,title,details,category} = note;
    return (
        <Container>
            <Card elevation={3}>
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

