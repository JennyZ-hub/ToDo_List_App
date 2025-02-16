import { useState } from 'react';
//import { TaskAdding } from './components/TaskAdding';
//import { TaskDisplay } from './components/TaskDisplay';

function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <main className="w-[800px] h=[600px]">
      <TaskAdding tasks={tasks} setTasks={setTasks} />
      <TaskDisplay tasks={tasks} setTasks={setTasks} />
    </main>
  );
}

function TaskAdding({ tasks, setTasks }) {
  const [input, setInput] = useState('');
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleAddingTask() {
    if (!input) return;
    setTasks([...tasks, { id: Date.now(), input, taskStatus: 'Open' }]);
    setInput('');
    console.log(tasks);
  }
  return (
    <div className="flex gap-[20px] justify-between mb-[40px]">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="New Task"
        className="flex-1 border p-2 rounded"
      />
      <button
        className="bg-green-500 text-white px-4 py-2 rounded"
        onClick={handleAddingTask}
      >
        Add Task
      </button>
    </div>
  );
}

function Task({ tasks, setTasks, task }) {
  function handleComplete(task) {
    const id = task.id;
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, taskStatus: 'Complete' } : task
    );
    console.log(updatedTasks);
    setTasks(updatedTasks);
  }
  const bgColor =
    task.taskStatus === 'Complete' ? 'bg-green-200' : 'bg-red-200';
  return (
    <li className={`flex h-48px justify-between pb-[12px] ${bgColor}`}>
      <p>{task.input}</p>

      {task.taskStatus === 'Complete' ? (
        <span>Complete</span>
      ) : (
        <button
          className="border-[4px] border-green-500 bg-green-white rounded-md bg-green-500 text-white px-4 py-2"
          onClick={() => handleComplete(task)}
        >
          Complete
        </button>
      )}
    </li>
  );
}

function TaskDisplay({ tasks, setTasks }) {
  const [display, setDisplay] = useState('All');

  console.log(tasks);

  function handleComplete(tasks) {
    setDisplay('Complete');
  }

  function handleOpen(tasks) {
    setDisplay('Open');
  }

  function handleAll(tasks) {
    setDisplay('All');
  }

  return (
    <main>
      <div className="flex justify-between items-center mb-[24px] ">
        <button
          className="border-[4px] border-green-500 bg-green-white text-black rounded-md hover:bg-green-500 hover:text-white px-4 py-2"
          onClick={() => handleComplete(tasks)}
        >
          Complete Tasks
        </button>
        <button
          className="border-[4px] border-green-500 bg-green-white text-black rounded-md hover:bg-green-500 hover:text-white px-4 py-2"
          onClick={() => handleOpen(tasks)}
        >
          Open Tasks
        </button>
        <button
          className="border-[4px] border-green-500 bg-green-white text-black rounded-md hover:bg-green-500 hover:text-white px-4 py-2"
          onClick={() => handleAll(tasks)}
        >
          All Tasks
        </button>
      </div>

      <ul>
        {display === 'All' &&
          tasks.map((task) => (
            <Task key={task.id} tasks={tasks} setTasks={setTasks} task={task} />
          ))}
        {display === 'Complete' &&
          tasks
            .filter((task) => task.taskStatus === 'Complete')
            .map((task) => (
              <Task
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
                task={task}
              />
            ))}
        {display === 'Open' &&
          tasks
            .filter((task) => task.taskStatus === 'Open')
            .map((task) => (
              <Task
                key={task.id}
                tasks={tasks}
                setTasks={setTasks}
                task={task}
              />
            ))}
      </ul>
    </main>
  );
}

export default App;
