// Тип для привычки
export interface IHabit {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  archived: boolean;
}

// Тип для записи о выполнении привычки
export interface IEntry {
  id: number;
  habitId: number;
  date: string;
  completed: boolean;
}
