import React, { Component } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export class Appbar extends Component {
  static propTypes = {};
  render() {
    return (
     

        <div className="root">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                edge="start"
                className="menuButton"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className="title">
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>
    );
  }
}

export default Appbar;
