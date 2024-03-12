//Todolist.js
import React from "react";
import { Button, ListGroup } from "react-bootstrap";

const TodoList = ({ todo, handleToggle, deleteTask, setEdittask }) => {
  return (
    <ListGroup>
      {todo.map((task, index) => (
        <ListGroup.Item key={task.id} className={`d-flex justify-content-between align-items-center ${task.completed ? "completed" : ""}`}>
          <div className="ms-2 me-auto">
            <div className="fw-bold">{task.title}</div>
            {task.description}
          </div>
          <Button variant="outline-success" onClick={() => handleToggle(task.id)}>Toggle</Button>
          <Button variant="outline-primary" onClick={() => setEdittask(task)}>Edit</Button>
          <Button variant="outline-danger" onClick={() => deleteTask(task.id)}>Delete</Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
