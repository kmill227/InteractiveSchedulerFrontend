import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import Help from '@material-ui/icons/Help';
import logo from './images/smaller-long-logo.png';
import './navbar.css';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Link } from '@material-ui/core';


const drawerWidth = 240;

export default function PermanentDrawerLeft() {
  return (
    <Box className = "navbar" sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: "85%"}}
      >
        <Toolbar>
        <img src={logo}></img>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: "15%",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: "15%",
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List id="List">
          <ListItem id="listItem" button component={Link} href="/Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home"/>
          </ListItem>
          <ListItem id="listItem" button component={Link} href="/Groups">
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItem>
          <ListItem id="listItem" button component={Link} href="/CalendarApp">
            <ListItemIcon>
              <CalendarMonthIcon />
            </ListItemIcon>
            <ListItemText primary="Calendar" />
          </ListItem>
          <ListItem id="listItem" button component={Link} href="/Messages">
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary="Messages" />
          </ListItem>
          <ListItem id="listItem" button component={Link} href="/Notifications">
            <ListItemIcon>
              <NotificationsActiveIcon />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
        </List>
        <Divider />
        <List>
        <ListItem id="listItem" button component={Link} href="/Account">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Account" />
        </ListItem>
        <ListItem id="listItem" button component={Link} href="/Support">
          <ListItemIcon>
            <PersonIcon />
          </ListItemIcon>
          <ListItemText primary="Support" />
        </ListItem>
      </List>
      <Divider/>
      <List>
        <ListItem id="listItem" button component={Link} href="/">
          <ListItemIcon>
            <NotificationsActiveIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
