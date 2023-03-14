import React, { Component } from 'react';
import './App.css';
import { Box, List, Divider, ListItem, ListItemIcon, ListItemText, Hidden, Drawer, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EmailIcon from '@mui/icons-material/Email';
import Help from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { ListItemButton } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import CssBaseline from '@mui/material/CssBaseline';

               
                const drawerWidth = 240;
                
                export default function PermanentDrawerLeft() { 
                  return (
                    <Box sx={{ display: 'flex' }}>
                      <CssBaseline />
                      <AppBar
                        position="fixed"
                        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
                      >
                        <Toolbar>
                          <Typography variant="h6" noWrap component="div">
                            FlashFriends
                          </Typography>
                        </Toolbar>
                      </AppBar>
                      <Drawer
                        sx={{
                          width: drawerWidth,
                          flexShrink: 0,
                          '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                          },
                        }}
                        variant="permanent"
                        anchor="left"
                      >
                        <Toolbar />
                        <Divider />
                        <List>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemButton component="a" href="/">
                        <ListItemText primary="Home" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemButton component="a" href="./CalendarApp">
                        <ListItemText primary="Calendar" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemIcon>
                            <EmailIcon />
                        </ListItemIcon>
                        <ListItemButton component="a" href="./Messages">
                        <ListItemText primary="Messages" />
                        </ListItemButton>
                    </ListItem>
                </List>
                        <Divider />
                        <List>
                    <ListItem>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemButton component="a" href="/Login">
                        <ListItemText primary="Login" />
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <ListItemIcon>
                            <CalendarMonthIcon />
                        </ListItemIcon>
                        <ListItemButton component="a" href="./Support">
                        <ListItemText primary="Support" />
                        </ListItemButton>
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