'use client';

import { TodoFormProps } from '../types';

export default function TodoForm({
  onAddtask,
  newTask,
  setNewTask,
}: TodoFormProps) {
  return (
    <div className="bg-slate-800 max-w-3xl mx-auto text-white px-8 rounded-lg p-8">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddtask();
        }}
      >
        <div className="bg-slate-200 text-slate-800 rounded-lg flex justify-between px-4 py-2 gap-4">
          <input
            type="text"
            placeholder="Add todo..."
            className="w-full rounded-lg px-4 outline-none"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            type="submit"
            className="bg-slate-800 text-white px-4 py-1.5 rounded-lg transition duration-300 hover:bg-slate-800/80 shrink-0 cursor-pointer"
          >
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
}
