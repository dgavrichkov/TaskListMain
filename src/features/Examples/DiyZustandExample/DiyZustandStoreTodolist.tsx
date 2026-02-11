import { useState } from 'react';
import { taskStore } from './tasks.store';

export const App = () => {
  const [input, setInput] = useState('');
  const tasks = taskStore.use((state) => state.tasks);
  const addTask = taskStore.use((state) => state.addTask);

  const handleAdd = () => {
    if (input.trim()) {
      addTask(input.trim());
      setInput('');
    }
  };

  return (
    <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
      <h1>📝 ToDo List</h1>
      <div style={{ display: 'flex', gap: 10 }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a task..."
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            #{task.id}: {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};
