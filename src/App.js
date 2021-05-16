import React from "react";
import { Grid } from "@material-ui/core";
import NavBarCom from "./components/NavBarCom";
import InputCom from "./components/InputCom";
import DisplayResults from "./components/DisplayResults";

function App() {
  return (
    <div>
      <Grid container>
        <NavBarCom></NavBarCom>
        <InputCom></InputCom>
        <DisplayResults></DisplayResults>
      </Grid>
    </div>
  );
}

export default App;
