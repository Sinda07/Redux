import React, { useState } from "react";
import { Button, Container, Form, InputGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { add_task } from "../../Redux/Actions/actions";
import "./style.css";

const AddTask = () => {
  const [description, setDescription] = useState("");
  const handleChange = (e) => {
    setDescription(e.target.value);
  };
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add_task(description));
  };
  return (
    <div>
      <Form>
        <Container>
          <InputGroup>
            <Form.Control
              aria-label="Example text with button addon"
              aria-describedby="basic-addon1"
              placeholder="type your task.."
              onChange={handleChange}
            />
            <Button variant="success" onClick={handleAdd}>
              Add Task
            </Button>
          </InputGroup>
        </Container>
      </Form>
    </div>
  );
};

export default AddTask;
