import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';

export default function Home() {
  return (
    <section className="space-y-4 p-4 mt-20">
      <TodoList />
      <TodoForm />
    </section>
  );
}