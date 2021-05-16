import React, { useState } from "react";
import { Input, Paper, makeStyles } from "@material-ui/core";
import "../scss/input.scss";
import ButtonCom from "./ButtonCom";

import { addTodo } from "../redux/reducer";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  paper: {
    width: "80%",
    padding: "45px",
    display: "flex",
    justifyContent: "space-evenly",
    alignContent: "center",
    background: "lightblue",
  },

  input: {
    width: "70%",
    padding: "5px",
  },
});

function InputCom() {
  const classes = useStyles();
  const [input, setInput] = useState({ item: "", complete: "" });
  const dispatch = useDispatch();

  const onChangeFunc = (e) => {
    setInput({ ...input, item: e.target.value });
  };

  const addTodoFunc = () => {
    if (input.item === "") {
      alert("Add something Todo list");
    } else {
      dispatch(addTodo({ input: input.item }));
    }
    setInput({ ...input, item: "" });
  };

  return (
    <div className="input_container">
      <Paper className={classes.paper}>
        <Input
          placeholder="add Todo"
          className={classes.input}
          value={input.item}
          onChange={onChangeFunc}
        ></Input>
        <ButtonCom func={addTodoFunc}></ButtonCom>
      </Paper>
    </div>
  );
}

export default InputCom;
