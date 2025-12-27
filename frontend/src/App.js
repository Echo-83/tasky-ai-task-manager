import React, { useState } from 'react';
import './App.css';
import Task from './Task';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTasks, setNewTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    text: '',
    priority: 1,
    deadline: '',
    state: false
  });

  const handleAddingTask = () => {
    if (newTask.text.trim() === '') return;
    const deadlines = newTask.deadline ? new Date(newTask.deadline) : new Date();
    const finalTask = new Task(newTask.text, Number(newTask.priority), deadlines, newTask.state);
    setTasks([...tasks, finalTask]);

    setNewTask({ text: '', priority: 1, deadline: '', state: false });
  };

  return (
    <div>
      <h1>Welcome to Tasky!</h1>
      <p>This is your personal AI-powered task manager.</p>

        <input 
        type="text" 
        id ="taskText" 
        value={newTask.text}
        onChange={e => setNewTask({ ...newTask, text: e.target.value })}   
	placeholder="Task description"
	/>

        <p> 1 
          <input 
          type="range" 
          id="taskPriority" 
          name="TaskPriority" 
          min="1" 
          max="10" 
          value={newTask.priority} 
          onChange={e => setNewTask({ ...newTask, priority: e.target.value })}
	  />
          10 
        </p>

        <input 
        type="date" 
        id="taskDeadline" 
        name="taskDeadline" 
        value={newTask.deadline}
        onChange={e => setNewTask({ ...newTask, deadline: e.target.value })}
        />
	<label>
        <input 
        type="checkbox" 
        id="taskState" 
        name="taskState" 
        checked={newTask.state}
        onChange={e => setNewTask({...newTask,state:e.target.checked})}
        />
	Done
	</label>
        
        <button onClick={handleAddingTask}>
          Add Task
        </button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <input 
              type="checkbox" 
              id="taskState" 
              name="taskState" 
              checked={task.getState()}
              onChange={e => {const updatedTasks = tasks.map((t, i) =>
                i === index ? new Task(t.getText(), t.getPriority(), t.getDeadline(), e.target.checked) : t
              );
              setTasks(updatedTasks);
            }}
            />
            {task.getState() ? <del>{task.getText()}</del> : task.getText()} - Priority: {task.getPriority()} - Deadline: {task.getDeadline().toLocaleDateString()} - Completed: {task.getState() ? 'Yes' : 'No'}
          </li>

            
        ))}
      </ul>
    </div>
  );
}

export default App;