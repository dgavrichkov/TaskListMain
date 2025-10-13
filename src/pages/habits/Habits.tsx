import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { HabitList } from './ui/HabitList';
import styles from './Habits.module.css';
import { HabitCreation } from './ui/HabitCreation';
import { Portal } from '@/shared/lib/Portal';
import { TOOLBAR_SLOTS } from '@/shared/constants/toolbarSlots';

export const Habits = () => {
  return (
    <div className={styles.habitsPage}>
      <ErrorBoundary fallback={<div>Habits page broken</div>}>
        <Portal portalId={TOOLBAR_SLOTS.WORKSPACE}>
          <HabitCreation />
        </Portal>
        <HabitList />
      </ErrorBoundary>
    </div>
  );
};
