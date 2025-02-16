import { useState } from 'react';
export default function TaskDisplay({ tasks }) {
  const [isCompleted, setIsCompleted] = useState(false);
  function handleComplete() {
    setIsCompleted(!isCompleted);
  }

  return (
    <ul>
      {tasks.map((task) => (
        <li key={Date.now()}>
          <p>{task}</p>
          {isCompleted ? <span>Open</span> : <span>Complete</span>}
          {isCompleted && <button onClick={handleComplete}>Complete</button>}
        </li>
      ))}
    </ul>
  );
}
