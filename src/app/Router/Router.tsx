import { Route, Routes } from "react-router-dom";
import { Greeting, Login, Note, Notes, Posts, Profile, Task, Tasks } from '../../pages';
import { PATHS } from '../../shared/constants/paths';
import { ProtectedRoute } from '../../features';
import { Layout } from '../Layout';

export const Router = () => (
  <Routes>
    <Route path='/' element={<Layout />}>
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
)
