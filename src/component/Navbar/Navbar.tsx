import React from 'react';
import {
    Link
  } from 'react-router-dom';
import { createStyles, fade, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import CreateIcon from '@material-ui/icons/Create';
import Button from '@material-ui/core/Button';

// import BigginerRider from '../pages/Form';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      fontSize:25,
      color:"#fff",
      textDecoration:"none"
    },
    bar: { 
      backgroundColor: '#000',
      height:"8vh" 
    },
    search: {
        position: 'relative',
        margin: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          width: '12ch',
          '&:focus': {
            width: '20ch',
          },
        },
      },
      button: {
        // textTransform: 'none',
        color: '#fff',
        position: 'relative',
        marginRight: theme.spacing(2),
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
      },
  }),
);

const Navbar = ()=> {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.bar}>
            <div className={classes.title}>Portfolio</div>
        <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="検索…"
              classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
                />
        </div>
        <Button
            component={Link}
            to="/BigginerRider"
            // to="/form"
            variant="outlined" 
            color="primary" 
            className={classes.button}
            >
            <CreateIcon />
            投稿
        </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;