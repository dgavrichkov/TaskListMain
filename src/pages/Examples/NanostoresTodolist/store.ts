import { useStore } from '@nanostores/react';
import { map, onMount } from 'nanostores';

type Authentication = {
  isLoggedIn: boolean;
  name?: string;
};

const $auth = map<Authentication>({
  isLoggedIn: false,
});

const login = (name: string) => {
  $auth.set({
    isLoggedIn: true,
    name,
  });
};

const logout = () => {
  $auth.set({
    isLoggedIn: false,
    name: undefined,
  });
};

export const useAuth = () => {
  const user = useStore($auth);

  return {
    user,
    actions: {
      login,
      logout,
    },
  };
};

type Note = {
  id: number;
  content: string;
  completed: boolean;
};

type NoteCollection = Note[];
type NoteCreation = Omit<Note, 'id'>;

const NOTES_KEY = 'notes';

const $todos = map<NoteCollection>([]);

const addTodo = (params: NoteCreation) => {
  const currentNotes = $todos.get();

  currentNotes.push({
    id: Math.floor(Math.random() * 1000),
    content: params.content,
    completed: params.completed,
  });

  $todos.set([...currentNotes]);

  window.localStorage.setItem(NOTES_KEY, JSON.stringify(currentNotes));
};

const completeTodo = (id: number) => {
  const todos = $todos.get().map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: true,
      };
    } else {
      return todo;
    }
  });
  $todos.set([...todos]);
  window.localStorage.setItem(NOTES_KEY, JSON.stringify(todos));
};

const deleteTodo = (id: number) => {
  const currentNotes = $todos.get();
  const updated = currentNotes.filter((todo) => todo.id !== id);
  $todos.set(updated);
  window.localStorage.setItem(NOTES_KEY, JSON.stringify(updated));
};

const clearTodos = () => {
  $todos.set([]);
  window.localStorage.removeItem(NOTES_KEY);
};

export const useNanoTodos = () => {
  const todos = useStore($todos);

  onMount($todos, () => {
    const storedTodos = window.localStorage.getItem(NOTES_KEY);
    if (storedTodos) {
      const parsedNotes: NoteCollection = JSON.parse(storedTodos);
      $todos.set(parsedNotes);
    }
  });

  return {
    todos,
    action: {
      addTodo,
      completeTodo,
      deleteTodo,
      clearTodos,
    },
  };
};
