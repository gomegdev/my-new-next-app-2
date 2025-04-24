'use client';

import { useState } from 'react';
import { TodoType } from './types';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export default function Home() {
  const [todos, setTodos] = useState<TodoType[]>([
    {
      id: crypto.randomUUID(),
      text: 'Learn React',
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      text: 'Learn Next',
      completed: false,
    },
    {
      id: crypto.randomUUID(),
      text: 'Learn Supabase',
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    {
      setTodos((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: newTask,
          completed: false,
        },
      ]);
      setNewTask('');
    }
  };

  const deleteTask = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="space-y-4">
      <TodoList
        todos={todos}
        onDeleteTask={deleteTask}
        onToggle={toggleComplete}
      />
      <TodoForm newTask={newTask} setNewTask={setNewTask} onAddtask={addTask} />
    </div>
  );
}
