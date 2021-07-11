import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  AppBar, Toolbar, Button, withStyles, Typography, IconButton, Menu
} from '@material-ui/core';

const useStyles = () => ({
  root: {
    flexGrow: 1,
  },
  app: {
    backgroundColor: '#5c6bc0',
  },
});

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classes.root}>
          <AppBar className={classes.app} position="static">
            <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu">
      <Menu />
    </IconButton>
              <Typography variant="h6" className={classes.root}>
                Home
              </Typography>
              <Button component={Link} to="/list" color="inherit">List </Button>
              <Button component={Link} to="/add" color="inherit">Add User</Button>
              {/* <Button component={Link} to="/edit" color="inherit">Edit User</Button> */}
              <Button component={Link} to="/delete" color="inherit">Delete User</Button>
            </Toolbar>
          </AppBar>
        </div>
      </>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default withStyles(useStyles)(Navbar);
