export type TodoType = {
  id: string;
  text: string;
  completed: boolean;
};

export type TodoFormProps = {
  onAddtask: () => void;
  newTask: string;
  setNewTask: (value: string) => void;
};

export type TodoListProps = {
  todos: TodoType[];
  onDeleteTask: (id: string) => void;
  onToggle: (id: string) => void;
};
