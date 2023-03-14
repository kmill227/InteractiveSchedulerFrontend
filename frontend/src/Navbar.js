/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import MenuIcon from '@material-ui/icons/Menu';
import LayersIcon from '@material-ui/icons/Layers';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: theme.palette.primary.dark,
  },
  toolbar: {
    minHeight: 70
  },
  menuButton: {
    display: 'none',
    marginRight: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
      display: 'inline-flex',
    }
  },
  linkBrand: {
    lineHeight: 1,
  },
  iconWrapper: {
    minWidth: 40,
  },
  icon: {
    color: theme.palette.text.hint,
  },
  drawerRoot: {
    width: 300,
    flexShrink: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    }
  },
  drawerContainer: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(3),
    width: 300,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function Navbar(props) {
  const classes = useStyles();

  const content = {
    'brand': { image: 'nereus-assets/img/nereus-dark.png', width: 110 },
    'brand-mobile': { image: 'nereus-assets/img/nereus-light.png', width: 110 },
    'link1': 'Home',
    'link2': 'Calendar',
    'link3': 'Contact Us',
    'link4': 'Account',
    ...props.content
  };

  let brand = content['brand'].text || '';
  let brandMobile = content['brand-mobile'].text || '';

  if (content['brand'].image) {
    brand = <img src={ content['brand'].image } alt="" width={ content['brand'].width } />;
  }

  if (content['brand-mobile'].image) {
    brandMobile = <img src={ content['brand-mobile'].image } alt="" width={ content['brand-mobile'].width } />;
  }

  const buckets = {
    'main': (Array.isArray(props.bucketMain) ? props.bucketMain : [])
  }

  const [state, setState] = React.useState({ open: false });

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Link href="#" color="inherit" underline="none" variant="h5" className={classes.linkBrand}>
            {brand}
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.drawerRoot} variant="permanent">
        <Toolbar className={classes.toolbar} />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon className={classes.iconWrapper}>
                <LayersIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon className={classes.iconWrapper}>
                <FilterHdrIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon className={classes.iconWrapper}>
                <DirectionsBusIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon className={classes.iconWrapper}>
                <NotificationImportantIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Drawer anchor="left" open={state.open} onClose={toggleDrawer(false)}>
        <div className={classes.drawerContainer}>
          <Box mb={1} ml={2} pb={2} border={1} borderTop={0} borderLeft={0} borderRight={0} borderColor="background.emphasis">
            <Link href="#" color="primary" underline="none" variant="h5" className={classes.linkBrand}>
              {brandMobile}
            </Link>
          </Box>
          <List>
            <ListItem button key={content['link1']}>
              <ListItemIcon className={classes.iconWrapper}>
                <LayersIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link1']} />
            </ListItem>
            <ListItem button key={content['link2']}>
              <ListItemIcon className={classes.iconWrapper}>
                <FilterHdrIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link2']} />
            </ListItem>
            <ListItem button key={content['link3']}>
              <ListItemIcon className={classes.iconWrapper}>
                <DirectionsBusIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link3']} />
            </ListItem>
            <ListItem button key={content['link4']}>
              <ListItemIcon className={classes.iconWrapper}>
                <NotificationImportantIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={content['link4']} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar className={classes.toolbar} />
        <div>
          {buckets['main'].map(component => <React.Fragment>{component}</React.Fragment>)} 
        </div>
      </main>
    </div>
  );
}
*/
import React, { Component } from 'react';
import './App.css';
import { Box, List, Divider, ListItem, ListItemIcon, ListItemText, Hidden, Drawer, Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import Help from '@material-ui/icons/Help';
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
const drawerWidth = 250;
const theme = createMuiTheme({
palette: {
        primary: {
            main: '#fefefe',
        },
        secondary: {
            main: '#3e4f6a',
        },
    },
});
const styles = theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgba(23, 37, 42, 1)",
        color: "#fefefe",
        border: "none",
    },
    content: {
        flexGrow: 1,
        minHeight: "100vh",
    },
    icon: {
        color: "#fefefe",
    },
    toolbar: theme.mixins.toolbar,
});
class Layout extends Component {
    state = {
        mobileOpen: false,
    };
handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };
    render() {
        const { classes } = this.props;
        const { mobileOpen } = this.state;
const drawer = (
            <div id="drawer-container">
                <div className="logo-drawer" />
                <List>
                    <ListItem onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <HomeIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <Divider />
                    <ListItem onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <CalendarMonthIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Calendar" />
                    </ListItem>
                    <ListItem onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <PersonIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Messages" />
                    </ListItem>
                    <ListItem onClick={mobileOpen ? this.handleDrawerToggle : null}>
                        <ListItemIcon>
                            <PersonIcon className={classes.icon} />
                        </ListItemIcon>
                        <ListItemText primary="Contact Us" />
                    </ListItem>
                </List>
            </div>
        );
        return (
            <div>
                <div id="main-background" />
                <div id="main-layout">
                    <MuiThemeProvider theme={theme}>
                        <div className={classes.root} >
                            <Hidden mdUp implementation="css">
                                <AppBar position="fixed" color="secondary">
                                    <Toolbar>
                                        <IconButton
                                            color="inherit"
                                            aria-label="Open drawer"
                                            onClick={this.handleDrawerToggle}
                                            className={classes.menuButton}
                                        >
                                            <MenuIcon />
                                        </IconButton>
                                        <Typography variant="h6" color="inherit" className={classes.title}>
                                            New app
                                    </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Hidden>
                            <nav className={classes.drawer}>
                                <Hidden mdUp implementation="css">
                                    <Drawer
                                        color="primary"
                                        className={classes.drawer}
                                        variant="temporary"
                                        open={mobileOpen}
                                        onClose={this.handleDrawerToggle}
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        anchor="left"
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                                <Hidden smDown implementation="css">
                                    <Drawer
                                        classes={{
                                            paper: classes.drawerPaper,
                                        }}
                                        variant="permanent"
                                        open
                                    >
                                        {drawer}
                                    </Drawer>
                                </Hidden>
                            </nav>
                        </div>
                    </MuiThemeProvider>
                </div>
            </div>
        );
    }
}
export default withStyles(styles)(Layout)