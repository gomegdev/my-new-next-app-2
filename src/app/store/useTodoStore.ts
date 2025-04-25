// store/useTodoStore.ts
import { create } from 'zustand';
import { FormEvent } from 'react';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type FilterType = 'all' | 'todo' | 'completed';

type TodoStore = {
  // State
  todos: Todo[];
  newTask: string;
  editingId: string | null;
  editText: string;
  filter: FilterType;
  
  // Methods
  getFilteredTodos: () => Todo[]; // Regular method instead of computed property
  
  // Actions
  setNewTask: (text: string) => void;
  addTask: () => void;
  handleFormSubmit: (e: FormEvent) => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  startEditing: (id: string, text: string) => void;
  saveEdit: (id: string, newText: string) => void;
  cancelEditing: () => void;
  setEditText: (text: string) => void;
  handleKeyDown: (e: React.KeyboardEvent, id: string) => void;
  setFilter: (filter: FilterType) => void;
};

export const useTodoStore = create<TodoStore>((set, get) => ({
  // Initial state
  todos: [
    { id: crypto.randomUUID(), text: 'Learn React', completed: true },
    { id: crypto.randomUUID(), text: 'Learn Next.js', completed: false },
    { id: crypto.randomUUID(), text: 'Learn Zustand', completed: false },
  ],
  newTask: '',
  editingId: null,
  editText: '',
  filter: 'all',
  
  // Method to get filtered todos
  getFilteredTodos: () => {
    const { todos, filter } = get();
    switch (filter) {
      case 'todo':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      case 'all':
      default:
        return todos;
    }
  },
  
  // Actions
  setNewTask: (text) => set({ newTask: text }),
  
  addTask: () => set((state) => {
    if (state.newTask.trim() === '') return state;
    
    return {
      todos: [
        ...state.todos,
        {
          id: crypto.randomUUID(),
          text: state.newTask,
          completed: false,
        },
      ],
      newTask: '',
    };
  }),
  
  handleFormSubmit: (e: FormEvent) => {
    e.preventDefault();
    get().addTask();
  },
  
  deleteTask: (id) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== id),
  })),
  
  toggleComplete: (id) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ),
  })),
  
  startEditing: (id, text) => set({
    editingId: id,
    editText: text,
  }),
  
  saveEdit: (id, newText) => set((state) => {
    if (newText.trim() === '') return state;
    
    return {
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      ),
      editingId: null,
      editText: '',
    };
  }),
  
  cancelEditing: () => set({
    editingId: null,
    editText: '',
  }),
  
  setEditText: (text) => set({ editText: text }),
  
  handleKeyDown: (e, id) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const { editText, saveEdit } = get();
      saveEdit(id, editText);
    } else if (e.key === 'Escape') {
      get().cancelEditing();
    }
  },
  
  setFilter: (filter) => set({ filter }),
}));