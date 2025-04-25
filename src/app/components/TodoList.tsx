'use client'
import { useTodoStore, FilterType } from '../store/useTodoStore';
import TodoItem from './TodoItem';

export default function TodoList() {
  const { todos, filter, setFilter, getFilteredTodos } = useTodoStore();
  const filteredTodos = getFilteredTodos();
  
  return (
    <article className="bg-slate-800 text-white min-h-[500px] max-w-3xl mx-auto rounded-lg p-8 flex flex-col justify-between overflow-hidden scroll-auto">
      <div className='flex flex-col gap-8'>
        <h1 className="text-5xl text-center font-bold">Todo App</h1>
        <h2 className="text-2xl text-center font-semibold">
          Your tasks
        </h2>
        <div className='flex justify-end gap-4'>
          <button 
            onClick={() => setFilter('all')}
            className={`rounded-lg px-4 py-2 text-base font-medium cursor-pointer transition duration-300 ${
              filter === 'all' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-emerald-500 text-black hover:bg-emerald-600 hover:text-white'
            }`}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('todo')}
            className={`rounded-lg px-4 py-2 text-base font-medium cursor-pointer transition duration-300 ${
              filter === 'todo' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-emerald-500 text-black hover:bg-emerald-600 hover:text-white'
            }`}
          >
            Todo
          </button>
          <button 
            onClick={() => setFilter('completed')}
            className={`rounded-lg px-4 py-2 text-base font-medium cursor-pointer transition duration-300 ${
              filter === 'completed' 
                ? 'bg-emerald-600 text-white' 
                : 'bg-emerald-500 text-black hover:bg-emerald-600 hover:text-white'
            }`}
          >
            Completed
          </button>
        </div>
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </div>
      <div className='flex justify-end'>
        <span className='text-sm font-semibold text-white/60'>
          Tasks completed {todos.filter((todo) => todo.completed).length}/
          {todos.length}
        </span>
      </div>
    </article>
  );
}