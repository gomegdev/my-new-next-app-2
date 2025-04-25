'use client'
import { useTodoStore, FilterType } from '../store/useTodoStore';

export default function TodoFilter() {
  const { filter, setFilter } = useTodoStore();
  
  return (
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
  );
}