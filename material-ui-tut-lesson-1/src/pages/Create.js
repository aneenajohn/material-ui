import React from 'react';
import Typography from "@material-ui/core/Typography";
import AppleIcon from '@material-ui/icons/Apple';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

export default function Create() {
  return (
    <div>
      <Typography variant="h2" align="center" color="primary">  
        Create a new note
      </Typography>
      <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
        Note 1
      </Typography>
      <Typography color="secondary">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <Typography noWrap color="textPrimary">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </Typography>
      <br/>
      <AppleIcon/>
      <AppleIcon color="secondary" fontSize="large" />
      <AppleIcon color="action" fontSize="small" />
      <AppleIcon color="error" fontSize="large" />
      <AppleIcon color="disabled" />
      <br/>
      <Button variant="contained" color="primary"
       startIcon={<SendIcon/>}
       endIcon={<KeyboardArrowRightIcon/>}
      >Send</Button>

    </div>
 
  )
}
