import { ErrorBoundary } from '@/shared/ui/ErrorBoundary';
import { HabitList } from './ui/HabitList';
import { HabitCreateForm } from './ui/HabitCreateForm';

export const Habits = () => {
  return (
    <div>
      <ErrorBoundary fallback={<div>Habits page broken</div>}>
        <div className="mb-4">
          <HabitCreateForm />
        </div>
        <HabitList />
      </ErrorBoundary>
    </div>
  );
};
