import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { App } from './App';
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { TasksPage } from "./components/pages/TasksPage";
import { TaskPage } from './components/pages/TaskPage';
import { NotesPage } from "./components/pages/NotesPage";
import { NotePage } from './components/pages/NotePage';
import { Greeting } from './components/pages/Greeting';
import { Login } from './components/pages/Login';
import { Profile, Posts, Tasks } from './pages';
import { ProtectedRoute } from './entities/ProtectedRoute';
import { PATHS } from './shared/constants/paths';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.ROOT} element={<App />}>
          <Route index element={<Greeting />} />
          {/* <Route path={PATHS.TASKS} element={<TasksPage />} /> */}
          <Route path={PATHS.TASKS} element={<Tasks />} />
          <Route path={PATHS.POSTS} element={<Posts />} />
          <Route path={PATHS.NOTES} element={<NotesPage />} />
          <Route path={`${PATHS.TASKS}/:taskId`} element={<TaskPage />} />
          <Route path={`${PATHS.NOTES}/:noteId`} element={<NotePage />} />
          <Route path={PATHS.LOGIN} element={<Login />} />
          <Route path={PATHS.PROFILE} element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
