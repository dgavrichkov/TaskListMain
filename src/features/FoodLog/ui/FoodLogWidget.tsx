import { FoodLogForm } from './FoodLogForm';
import { FoodLogList } from './FoodLogList';

export function FoodLogWidget() {
  return (
    <div className="space-y-4">
      <FoodLogForm />
      <FoodLogList />
    </div>
  );
}
