import { makeStyles } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const drawerWidth = 240;
const useStyles= makeStyles({
    root:{
        display:'flex'
    },
    page:{
        background:'#f9f9f9',
        width:'100%'
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    }

})
export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            {/* App bar */}
            {/* Side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <Typography variant="h5">Note Keeper</Typography>
                <List>
                    <ListItem>
                        <ListItemText> My Notes </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText> Create Note </ListItemText>
                    </ListItem>
                </List>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}
