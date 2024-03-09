//Todolist.jsx
import React from "react";
import {Button, ListGroup} from "react-bootstrap";

const TodoList = ({todo, handletoggle, deleteTask}) => {
    return (
        <ListGroup>
            {todo.map((task, index) => (
            <ListGroup.Item key={index} className={`d-flex justify-content-between align-items-center ${task.complete ? 'bg-light text-decoration-line-through' : ''}`}>
                {task.title}
                <div>
                    <Button variant="success" size="sm" onClick={() => handletoggle(task.id)} className="me-2">{task.complete ? 'Undo' : 'Complete'}</Button>
                    <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
                </div>
            </ListGroup.Item>
            ))}
        </ListGroup>
    );
}

export default TodoList;