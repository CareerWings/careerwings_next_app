import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    AppBar,
    Toolbar,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    useMediaQuery,
    useTheme,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import FeedbackIcon from '@mui/icons-material/Feedback';
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        padding: 5,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));
function Navbar() {
    const classes = useStyles();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // check if screen size is smaller than 'sm' breakpoint
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className={classes.root}>
                <AppBar position="fixed" className={classes.appBar}>
                    {isMobile && ( // if screen size is smaller than 'sm' breakpoint, show menu button
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerOpen}
                                className={classes.menuButton}
                            >
                                <MenuIcon/>
                            </IconButton>
                        </Toolbar>
                    )}
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant={isMobile ? 'temporary' : 'permanent'} // use 'temporary' variant for mobile screens and 'permanent' variant for larger screens
                    open={!isMobile || open} // keep the drawer open for larger screens or if the drawer is explicitly opened for mobile screens
                    onClose={handleDrawerClose}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    <List>
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            {(!isMobile || open) && (
                                // show text if the drawer is open or if the screen size is larger than 'sm' breakpoint
                                <ListItemText primary="Home" />
                            )}
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            {(!isMobile || open) && (
                                <ListItemText primary="Mentor" />
                            )}
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <ChatIcon />
                            </ListItemIcon>
                            {(!isMobile || open) && (
                                <ListItemText primary="Chat" />
                            )}
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <SchoolIcon />
                            </ListItemIcon>
                            {(!isMobile || open) && (
                                <ListItemText primary="Courses" />
                            )}
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <InfoIcon />
                            </ListItemIcon>
                            {(!isMobile || open) && (

                                <ListItemText primary="Testimonials" />
                            )}
                        </ListItem>
                        <ListItem button>
                            <ListItemIcon>
                                <FeedbackIcon />
                            </ListItemIcon>
                            {(!isMobile || open) && (
                                <ListItemText primary="About Us" />
                            )}
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        </>
    );
}
export default Navbar;


