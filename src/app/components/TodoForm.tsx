'use client'
import { useTodoStore } from '../store/useTodoStore';

export default function TodoForm() {
  const { newTask, setNewTask, addTask } = useTodoStore();
  
  return (
    <form onSubmit={(e) => {
      e.preventDefault(); 
      addTask(); 
    }} 
    className="max-w-3xl mx-auto flex bg-slate-800 p-4 rounded-lg mt-8">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addTask();
          }
        }}
        className="flex-1 text-white rounded-l-lg px-4 py-2 outline-none"
        placeholder="Add a new task..."
      />
      <button
        type="submit"
        className="bg-emerald-500 text-black text-lg font-medium px-4 py-2 rounded-lg hover:bg-emerald-600 hover:text-white transition duration-300 cursor-pointer"
      >
        Add Task
      </button>
    </form>
  );
}