'use client';

import { TodoListProps } from '../types';

export default function TodoList({
  todos,
  onDeleteTask,
  onToggle,
}: TodoListProps) {
  return (
    <div className="bg-slate-800 text-white h-96 max-w-3xl mx-auto rounded-lg p-8 flex flex-col justify-between">
      <div>
        <h1 className="text-5xl text-center font-bold">Todo App</h1>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center pb-4"
            >
              <div className="flex items-center">
                <input
                  onChange={() => onToggle(todo.id)}
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
              <button
                onClick={() => onDeleteTask(todo.id)}
                className="text-lg font-bold bg-red-500 rounded-lg px-3 py-1 
                hover:bg-red-600 transition duration-300"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <span>
          Tasks completed {todos.filter((todo) => todo.completed).length}/
          {todos.length}
        </span>
      </div>
    </div>
  );
}
