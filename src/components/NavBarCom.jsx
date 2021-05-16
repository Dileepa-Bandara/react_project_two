import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
  button: {
    marginLeft: "10px",
  },
});

function NavBarCom() {
  const classes = useStyles();

  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">Todo App </Typography>
          <Button
            variant="contained"
            color="secondary"
            endIcon={<ArrowForwardIosIcon></ArrowForwardIosIcon>}
            className={classes.button}
          >
            GitHub Code
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBarCom;
