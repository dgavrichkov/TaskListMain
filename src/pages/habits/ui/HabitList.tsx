import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { habitStore } from '../model/store';
import { HabitItem } from './HabitItem';

import styles from '../Habits.module.css';

/* Список привычек */
export const HabitList = observer(() => {
  useEffect(() => {
    habitStore.loadHabits();
  }, []);

  if (habitStore.isLoading) {
    return <p>Загрузка привычек...</p>;
  }

  return (
    <ul>
      {habitStore.habits.map((habit) => (
        <li className={styles.habitCard} key={habit.id}>
          <HabitItem habit={habit} />
        </li>
      ))}
    </ul>
  );
});
