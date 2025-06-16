import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { HabitList } from './ui/HabitList';
import styles from './Habits.module.css';
import { HabitCreation } from './ui/HabitCreation';

export const Habits = () => {
  return (
    <div className={styles.habitsPage}>
      <ErrorBoundary fallback={<div>Habits page broken</div>}>
        <header className="mb-2 flex">
          <HabitCreation />
        </header>
        <HabitList />
      </ErrorBoundary>
    </div>
  );
};
