import React from "react";
import { useSelector } from "react-redux";
import { Button, IconButton } from "@material-ui/core";
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep";
import { useDispatch } from "react-redux";
import { select, deleteItem } from "../redux/reducer";

import "../scss/list.scss";

function DisplayResults() {
  const list = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const selectFunc = (id, complete) => {
    dispatch(select({ complete: !complete, id: id }));
  };
  const deleteFunc = (id) => {
    dispatch(deleteItem({ id: id }));
  };

  return (
    <div className="display">
      <ul>
        {list.map((item) => (
          <li
            key={item.id}
            style={
              item.complete
                ? { background: "red", textDecoration: "line-through" }
                : null
            }
          >
            <h3>{item.item}</h3>

            <Button
              variant="outlined"
              color="inherit"
              onClick={() => selectFunc(item.id, item.complete)}
            >
              Select
            </Button>
            <IconButton onClick={() => deleteFunc(item.id)}>
              <DeleteSweepIcon></DeleteSweepIcon>
            </IconButton>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayResults;
