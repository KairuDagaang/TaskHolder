import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  function addTask() {
    if (!inputValue.trim()) return;
    setTasks([...tasks, { id: Date.now(), name: inputValue }]);
    setInputValue('');
  }

  function removeTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(id, newName) {
    setTasks(tasks.map(task => (task.id === id ? { ...task, name: newName } : task)));
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg">
      <h1 className="text-center font-bold text-4xl mb-6">List of Tasks</h1>
      <div className="space-y-4">
        {tasks.map(task => (
          <div key={task.id} className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded">
            <span>{task.name}</span>
            <div className="space-x-2">
              <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600" onClick={() => removeTask(task.id)}>Delete</button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => {
                const newTaskName = prompt('Enter new task name:', task.name);
                if (newTaskName !== null) {
                  editTask(task.id, newTaskName);
                }
              }}>Edit</button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center space-x-4">
        <input
          type="text"
          className="border rounded px-4 py-2 w-full"
          placeholder="Type your task here..."
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default App;
