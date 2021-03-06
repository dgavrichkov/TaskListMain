import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import {App} from './App';
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksPage } from "./components/pages/TasksPage";
import { TaskPage } from './components/pages/TaskPage';
import { NotesPage } from "./components/pages/NotesPage";
import { NotePage } from './components/pages/NotePage';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/TaskListMain" element={<App />}>
          <Route path="tasks" element={<TasksPage />} />
          <Route path="notes" element={<NotesPage />} />
          <Route path="tasks/:taskId" element={<TaskPage />} />
          <Route path="notes/:noteId" element={<NotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
