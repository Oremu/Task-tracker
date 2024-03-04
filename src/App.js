import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Send Mum a birthday message",
      day: "Feb 23rd at 6:30am",
      reminder: true,
    },
    {
      id: 2,
      text: "Go to Apapa Branch for annual thanksgiving",
      day: "Feb 25th at 8:00am",
      reminder: true,
    },
    {
      id: 3,
      text: "Go back to Yaba",
      day: "Feb 27th at 6:30am",
      reminder: true,
    },
  ])
  
  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? {
          ...task, reminder:
        !task.reminder } : task
      )
    )
  }
  

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
        onDelete={deleteTask}
        onToggle={toggleReminder}
        />
      ) : (
        'No Tasks to Show'
      )}
    </div>
  )
}

export default App;
