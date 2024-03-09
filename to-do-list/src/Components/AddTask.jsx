//AddTask.jsx
import { useState } from "react";
import {Button, Form, Row, Col} from "react-bootstrap";

function AddTask({addTask}){
    const [input, setInput] = useState({
        title: '',
        description: '',
        priority: 'Medium',
        dueDate: '',
    });

    function handleInput(e){
        const {name, value} = e.target;
        setInput({...input, [name]: value});
    }

    function handleSubmit(e){
        e.preventDefault();
        addTask(input);
        setInput({title: '',description: '',priority: 'Medium', dueDate: ''});
    }
    return(
        <div>
        <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={input.title} onChange={handleInput} placeholder="Enter task title..." required />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control type="date" name="dueDate" value={input.dueDate} onChange={handleInput} placeholder="Select due date" required />
                </Form.Group>
            </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" name="description" value={input.description} onChange={handleInput} rows={4} placeholder="Enter task description..." />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Priority</Form.Label>
                    <Form.Control as="select" name="priority" value={input.priority} onChange={handleInput} >
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">Add Task</Button>
        </Form>
        </div>
    )
}

export default AddTask;