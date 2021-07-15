import { makeStyles, useTheme } from '@material-ui/core'
import React from 'react'
import {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
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
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
              },
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
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                marginLeft: drawerWidth,
              },
          },
        toolbar: theme.mixins.toolbar,
        date:{
            flexGrow:1 
        },
        avatar:{
            marginLeft:theme.spacing(2)
        },
        closeMenuButton: {
            marginRight: 'auto',
            marginLeft: 0,
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
              display: 'none',
            }
        }   
    }
    })


export default function Layout({children}) {
    const classes = useStyles();
    const history = useHistory();
    const theme = useTheme();
    const {pathname} = useLocation();
    const [mobileOpen, setMobileOpen] = useState(false);

    const menuItems= [
        {
            text:"My Notes",
            icon: <SubjectOutlined color="primary" />,
            path:"/"
        },
        {
            text:"Create Note",
            icon: <AddCircleOutlineOutlined color="primary" />,
            path:"/create"
        }
    ]
   
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const DrawerContent =(
        <>
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
        </>
    )
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <AppBar  className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                            <MenuIcon />
                    </IconButton>
                    <Typography className={classes.date}>{format (new Date(),'do MMMM Y')}</Typography>
                    <Typography>Mr.Bean</Typography>
                    <Avatar src="bean.jpg" className={classes.avatar}/>
                </Toolbar>
            </AppBar>
            <Hidden smUp implementation="css">
            <Drawer
                // container={container}
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                paper: classes.drawerPaper,
                }}
                ModalProps={{
                keepMounted: true, // Better open performance on mobile.
                }}
            >
                {/* <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                    <CloseIcon/>
                </IconButton> */}
                {DrawerContent}
            </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                {DrawerContent}
            </Drawer>
            </Hidden>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}
