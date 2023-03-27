import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { App } from './App';
import { store } from "./store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Greeting,
  Tasks,
  Task,
  Notes,
  Note,
  Login,
  Profile,
  Posts,
} from "./pages";
import { ProtectedRoute } from './features/ProtectedRoute';
import { PATHS } from './shared/constants/paths';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.ROOT} element={<App />}>
          <Route index element={<Greeting />} />
          <Route path={PATHS.TASKS} element={<Tasks />} />
          <Route path={PATHS.POSTS} element={<Posts />} />
          <Route path={PATHS.NOTES} element={<Notes />} />
          <Route path={`${PATHS.TASKS}/:taskId`} element={<Task />} />
          <Route path={`${PATHS.NOTES}/:noteId`} element={<Note />} />
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
