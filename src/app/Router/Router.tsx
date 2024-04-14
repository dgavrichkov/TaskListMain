import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Greeting, Login, Note, Notes, Posts, Profile, Task, Tasks } from '../../pages';
import { Experiments } from '../../pages/Experiments';
import { PATHS } from '../../shared/constants/paths';
import { ProtectedRoute } from '../../features';
import { Layout } from '../Layout';

export const Router: FC = () => (
  <Routes>
    <Route element={<Layout />} path="/">
      <Route index element={<Greeting />} />
      <Route element={<Login />} path={PATHS.LOGIN} />
      <Route element={<ProtectedRoute />}>
        <Route element={<Tasks />} path={PATHS.TASKS} />
        <Route element={<Posts />} path={PATHS.POSTS} />
        <Route element={<Notes />} path={PATHS.NOTES} />
        <Route element={<Task />} path={`${PATHS.TASKS}/:taskId`} />
        <Route element={<Note />} path={`${PATHS.NOTES}/:noteId`} />
        <Route element={<Profile />} path={PATHS.PROFILE} />
      </Route>
      <Route element={<Experiments />} path="/experiments" />
    </Route>
  </Routes>
);
