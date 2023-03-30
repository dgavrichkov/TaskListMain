import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Greeting, Login, Note, Notes, Posts, Profile, Task, Tasks } from '../../pages';
import {App} from '../App';
import { PATHS } from '../../shared/constants/paths';
import { ProtectedRoute } from '../../features';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
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
  )
);

export const Router = () => (
  <RouterProvider router={router} />
)
