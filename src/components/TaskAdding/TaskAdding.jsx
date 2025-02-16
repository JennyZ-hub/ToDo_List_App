import { useState } from 'react';
export default function TaskAdding({ tasks, setTasks }) {
  const [input, setInput] = useState('');
  function handleChange(e) {
    setInput(e.target.value);
  }
  function handleAddingTask() {
    if (input) return;
    setTasks([...tasks, input]);
    setInput('');
  }
  return (
    <div>
      <label>New Task</label>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="New Task"
        className="border p-2 rounded"
      />
      <button onClick={handleAddingTask}>Add</button>
    </div>
  );
}
