import { makeStyles, MenuList } from '@material-ui/core'
import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router';
import {format} from 'date-fns';

const drawerWidth = 240;
const useStyles= makeStyles( (theme) => {
    return{
        root:{
            display:'flex'
        },
        page:{
            background:'#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        active:{
            background:"#f4f4f4"
        },
        title:{
            padding:theme.spacing(3)
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
          },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow:1 
        },
        avatar:{
            marginLeft:theme.spacing(2)
        }
    }   
}
)
export default function Layout({children}) {
    const classes = useStyles();
    const history = useHistory();
    const {pathname} = useLocation();

    const menuItems= [
        {
            text:"My Notes",
            icon: <SubjectOutlined color="secondary" />,
            path:"/"
        },
        {
            text:"Create Note",
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path:"/create"
        }
    ]
    return (
        <div className={classes.root}>
            {/* App bar */}
            <AppBar  className={classes.appBar}> 
                <Toolbar>
                    <Typography className={classes.date}>{format (new Date(),'do MMMM Y')}</Typography>
                    <Typography>Mr.Bean</Typography>
                    <Avatar src="bean.jpg" className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            {/* Side drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <Typography variant="h5" className={classes.title}>Note Keeper</Typography>
                <List>
                    
                      {menuItems.map(item => (
                        <ListItem id={item.text}
                            button
                            onClick={()=> history.push(item.path)}
                            className={pathname === item.path && classes.active}
                        >
                          <ListItemIcon>{item.icon}</ListItemIcon>
                          <ListItemText primary={item.text}/>
                        </ListItem>
                      ))}
                    
                </List> 
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
