import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { HabitList } from './ui/HabitList';
import { HabitCreateForm } from './ui/HabitCreateForm';
import styles from './Habits.module.css';

export const Habits = () => {
  return (
    <div className={styles.habitsPage}>
      <ErrorBoundary fallback={<div>Habits page broken</div>}>
        <div className="mb-4">
          <HabitCreateForm />
        </div>
        <HabitList />
      </ErrorBoundary>
    </div>
  );
};
