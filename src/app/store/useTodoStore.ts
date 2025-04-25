// store/useTodoStore.ts
import { create } from 'zustand';

export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

type TodoStore = {
  // State
  todos: Todo[];
  newTask: string;
  editingId: string | null;
  editText: string;
  
  // Actions
  setNewTask: (text: string) => void;
  addTask: () => void;
  deleteTask: (id: string) => void;
  toggleComplete: (id: string) => void;
  startEditing: (id: string, text: string) => void;
  saveEdit: (id: string, newText: string) => void;
  cancelEditing: () => void;
  setEditText: (text: string) => void;
};

export const useTodoStore = create<TodoStore>((set) => ({
  // Initial state
  todos: [
    { id: crypto.randomUUID(), text: 'Learn React', completed: true },
    { id: crypto.randomUUID(), text: 'Learn Next.js', completed: false },
    { id: crypto.randomUUID(), text: 'Learn Zustand', completed: false },
  ],
  newTask: '',
  editingId: null,
  editText: '',
  
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
}));