'use client'
import { useTodoStore } from '../store/useTodoStore';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos } = useTodoStore();
  
  return (
    <article className="bg-slate-800 text-white min-h-96 max-w-3xl mx-auto rounded-lg p-8 flex flex-col justify-between">
      <div className='flex flex-col gap-8'>
        <h1 className="text-5xl text-center font-bold">Todo App</h1>
        <ul>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <div>
        <span>
          Tasks completed {todos.filter((todo) => todo.completed).length}/
          {todos.length}
        </span>
      </div>
    </article>
  );
}