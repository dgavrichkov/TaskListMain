export type TimeEntry = {
  id: string;
  // userId: string;
  taskId: string;
  kind: 'pomodoro' | 'break' | 'custom';
  status: 'running' | 'paused' | 'completed' | 'canceled';
  startedAt: string; // первый slice.startedAt
  endedAt: string | null; // последний slice.endedAt (или null, если есть открытый)
  durationMs: number; // кеш (0 при создании)
  note?: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TimeSlice = {
  id: string;
  entryId: string; // FK -> TimeEntry.id
  startedAt: string; // UTC
  endedAt: string | null; // UTC; null = активный отрезок
  createdAt: string;
  updatedAt: string;
};

export class StartEntryDto {
  kind!: 'pomodoro' | 'break' | 'custom';
  startedAt?: string; // опционально, иначе nowUTC()
  note?: string;
}
export class PauseTimeEntryDto {} // без тела
export class ResumeTimeEntryDto {} // без тела
export class StopTimeEntryDto {
  endedAt?: string;
}
