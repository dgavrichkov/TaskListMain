import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { habitStore } from '../model/store';
import { HabitItem } from './HabitItem';

/* Список привычек */
export const HabitList = observer(() => {
  useEffect(() => {
    habitStore.loadHabits();
  }, []);

  if (habitStore.isLoading) {
    return <p>Загрузка привычек...</p>;
  }

  return (
    <div>
      <ul>
        {habitStore.habits.map((habit) => (
          <li key={habit.id}>
            <HabitItem habit={habit} />
          </li>
        ))}
      </ul>
    </div>
  );
});
