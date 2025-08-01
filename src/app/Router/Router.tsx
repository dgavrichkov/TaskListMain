import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Greeting, Login, Note, Notes, Posts, Profile, Task, Tasks } from '../../pages';
import { Examples } from '../../pages/Examples';
import { Verbs } from '../../pages/Verbs';
import { PATHS } from '../../shared/constants/paths';
// import { ProtectedRoute } from '../../features';
import { Layout } from '../Layout';
import { Habits } from '@/pages/habits';
import { Training } from '@/pages/Training';

export const Router: FC = () => (
  <Routes>
    <Route element={<Layout />} path="/">
      <Route index element={<Greeting />} />
      <Route element={<Login />} path={PATHS.LOGIN} />
      {/* <Route element={<ProtectedRoute />}> */}
      <Route element={<Tasks />} path={PATHS.TASKS} />
      <Route element={<Posts />} path={PATHS.POSTS} />
      <Route element={<Notes />} path={PATHS.NOTES} />
      <Route element={<Task />} path={`${PATHS.TASKS}/:taskId`} />
      <Route element={<Note />} path={`${PATHS.NOTES}/:noteId`} />
      <Route element={<Profile />} path={PATHS.PROFILE} />
      {/* </Route> */}
      <Route element={<Examples />} path={PATHS.EXAMPLES} />
      <Route element={<Verbs />} path={PATHS.VERBS} />
      <Route element={<Habits />} path={PATHS.HABITS} />
      <Route element={<Training />} path={PATHS.TRAINING} />
    </Route>
  </Routes>
);
