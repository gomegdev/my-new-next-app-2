'use client'
import { Todo, useTodoStore } from '../store/useTodoStore';

type Props = {
  todo: Todo;
};

export default function TodoItem({ todo }: Props) {
  const { 
    toggleComplete, 
    deleteTask, 
    startEditing, 
    saveEdit,
    cancelEditing,
    editingId, 
    editText, 
    setEditText 
  } = useTodoStore();
  
  const isEditing = editingId === todo.id;
  
  return (
    <li className="flex justify-between items-center pb-4 group">
      {isEditing ? (
        <div className="flex justify-between items-center w-full">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                saveEdit(todo.id, editText);
              } else if (e.key === 'Escape') {
                cancelEditing();
              }
            }}
            className="bg-slate-200 text-slate-800 rounded-lg px-4 py-2 outline-none"
            autoFocus
          />
          <button
            onClick={() => saveEdit(todo.id, editText)}
            className="bg-emerald-500 text-slate-800 px-4 py-1.5 rounded-lg transition duration-300 hover:bg-slate-800/80 shrink-0 cursor-pointer"
          >
            Save
          </button>
        </div>
      ) : (
        <>
          <div className="flex items-center">
            <input
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
              type="checkbox"
              className="size-5 mr-2"
            />
            <span
              className={`text-2xl font-semibold ${
                todo.completed ? 'line-through text-white/60' : ''
              }`}
            >
              {todo.text}
            </span>
          </div>
          <div className='flex gap-4 transition duration-300 opacity-0 group-hover:opacity-100'>
            {!todo.completed && (
              <button
                onClick={() => startEditing(todo.id, todo.text)}
                className="text-lg font-bold bg-slate-400 rounded-lg px-3 py-1
                hover:bg-slate-500 transition duration-300 cursor-pointer"
              >
                Edit
              </button>
            )}
            <button
              onClick={() => deleteTask(todo.id)}
              className="text-lg font-bold bg-red-500 rounded-lg px-3 py-1
              hover:bg-red-600 transition duration-300 cursor-pointer"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </li>
  );
}