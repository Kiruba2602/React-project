//App.js
import { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './App.css';
import Header from './Components/Header';
import TodoList from './Components/Todolist';
import AddTask from './Components/AddTask';
import CalendarComponent from './Components/Calendar';

function App() {
  const [todolist, setTodolist] = useState([]);
  const [edittask, setEdittask] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setTodolist(todolist.map(task => ({
      ...task,
      start: new Date(task.dueDate),
      end: new Date(task.dueDate)
    })));
  }, []);

  function handleToggle(id){
    let mapped = todolist.map((todo,i)=>{
      return i === id ? {...todo, complete: !todo.complete} : todo;
    })
    setTodolist(mapped);
  }

  function clearEditing(){
    setEdittask(null);
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

  function getFilteredtask(){
    if(filter === 'all')
      return todolist;
    if(filter === 'completed')
      return todolist.filter(task => task.completed);
    if(filter === 'incomplete')
      return todolist.filter(task => !task.completed);
    
    return todolist.filter(task => task.priority === filter);
  }

  return (
    <Container fluid="md">
      <Row>
        <Col>
          <Form.Select aria-label="Filter-tasks" onChange={e => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
            <option value="incomplete">Incomplete</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row className='my-4'>
        <Col>
          <h2>{edittask ? "Edit Task" : "Add New Task"}</h2>
          <AddTask addTask={addTask} editTask={edittask} clearEditing={clearEditing}/>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <h2>Tasks</h2>
        <TodoList todo={getFilteredtask()} handletoggle={handleToggle} deleteTask={deleteTask} setEdittask={setEdittask}/>
        </Col>
        <Col>
          <h2>Calender</h2>
          <CalendarComponent todolist={getFilteredtask()}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;