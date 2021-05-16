import React from "react";
import { Button } from "@material-ui/core";
function ButtonCom({ func }) {
  return (
    <div>
      <Button variant="contained" color="primary" onClick={func}>
        Add Todo
      </Button>
    </div>
  );
}

export default ButtonCom;
