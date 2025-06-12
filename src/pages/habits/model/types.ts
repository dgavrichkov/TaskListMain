// Тип для привычки
export interface IHabit {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  archived: boolean;
  countToComplete: number;
}

// Тип для записи о выполнении привычки
export interface IEntry {
  id: string;
  habitId: string;
  date: string;
  completed: boolean;
}
