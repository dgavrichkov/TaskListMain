export type THabit = {
  id: string;
  userId: string;
  name: string;
  description: string;
  category: string; // пока просто название категории
  goal: number; // число дней
  periodicity: string; // todo; периодичность (ежедневно, раз в неделю и т.д.)
  completionsPerDay: number;
  createdAt: Date;
  icon?: string; // название иконки
  color?: string; // акцентный цвет для привычки
};

/** Запись о выполнении  */
export type THabitRecord = {
  id: string;
  habitId: string;
  date: Date;
  status: 'done' | 'skipped';
};
