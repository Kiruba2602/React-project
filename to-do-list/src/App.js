//App.js
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/Todolist';
import AddTask from './Components/AddTask';
import CalendarComponent from './Components/Calendar';

function App() {
  const [todolist, setTodolist] = useState([]);

  function handleToggle(id){
    let mapped = todolist.map((todo,i)=>{
      return i === id ? {...todo, complete: !todo.complete} : todo;
    })
    setTodolist(mapped);
  }

  function deleteTask(id){
    let filtered = todolist.filter((task, index)=>task.id !== id);
    setTodolist(filtered);
  }

  function addTask(input){
    const newTask = {
      id: todolist.length + 1,
      title: input.title,
      description: input.description,
      priority: input.priority,
      dueDate: input.dueDate,
      completed: false,
    };
    setTodolist([...todolist, newTask]);
  }
  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className='my-4'>
        <Col>
          <h2>Add New Task</h2>
          <AddTask addTask={addTask}/>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Tasks</h2>
          <TodoList todo={todolist} handletoggle={handleToggle} deleteTask={deleteTask}/>
        </Col>
        <Col>
          <h2>Calender</h2>
          <CalendarComponent todolist={todolist}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;