'use client'
import { useTodoStore } from '../store/useTodoStore';

export default function TodoForm() {
  const { newTask, setNewTask, addTask } = useTodoStore();
  
  return (
    <div className="max-w-3xl mx-auto flex">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask();
          }
        }}
        className="flex-1 bg-slate-700 text-white rounded-l-lg px-4 py-2 outline-none"
        placeholder="Add a new task..."
      />
      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg hover:bg-blue-600 transition duration-300"
      >
        Add
      </button>
    </div>
  );
}