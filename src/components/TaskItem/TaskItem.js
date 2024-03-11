import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { delete_task, done_task } from "../../Redux/Actions/actions";
import EditTask from "../EditTask/EditTask";
import "./style.css";

const TaskItem = ({ task }) => {
  const dispatch = useDispatch();
  const handleDone = (id) => {
    dispatch(done_task(id));
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Text>{task.description}</Card.Text>
          <div className="Buttons">
            <Button
              variant={!task.done ? "success" : "warning"}
              onClick={() => handleDone(task.id)}
            >
              {task.done ? "Not Done" : "Done"}
            </Button>
            <Button variant="primary" onClick={() => setShow(!show)}>
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => dispatch(delete_task(task.id))}
            >
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
      <EditTask show={show} handleClose={handleClose} task={task} />
    </>
  );
};
export default TaskItem;
