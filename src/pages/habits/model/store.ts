import { flow, makeAutoObservable } from 'mobx';
import { IEntry, IHabit } from './types';
import {
  deleteHabit,
  deleteHabitEntry,
  loadHabitEntries,
  loadHabits,
  patchHabitEntryCompletion,
  postHabitEntry,
  postNewHabit,
} from '../api';
export class HabitModel {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  archived: boolean;
  countToComplete: number;

  entries: IEntry[] = [];

  constructor(data: IHabit) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.archived = data.archived;
    this.countToComplete = data.countToComplete || 1;

    makeAutoObservable(this, {
      loadEntries: flow,
      createEntryCompletion: flow,
      deleteEntryCompletion: flow,
    });
  }

  *loadEntries() {
    const data: IEntry[] = yield loadHabitEntries(this.id);
    this.entries = data;
  }

  getEntriesByDate(date: string): IEntry[] {
    return this.entries.filter((e) => e.date === date);
  }

  *createEntryCompletion(date: string) {
    const newEntry: Omit<IEntry, 'id'> = {
      habitId: this.id,
      date,
      completed: true,
    };
    const created: IEntry = yield postHabitEntry(newEntry);
    this.entries.push(created);
  }

  *deleteEntryCompletion(date: string) {
    const existingEntries = this.getEntriesByDate(date);

    const entryToDelete = existingEntries[0];

    yield deleteHabitEntry(entryToDelete.id);
    this.entries = this.entries.filter((e) => e.id !== entryToDelete.id);
  }

  deleteDailyCompletions = flow(function* (
    this: HabitModel,
    date: string,
  ): Generator<Promise<void>, void, any> {
    const entriesToDelete = this.entries.filter((entry) => entry.date === date);

    for (const entry of entriesToDelete) {
      yield deleteHabitEntry(entry.id);
    }

    this.entries = this.entries.filter((e) => e.date !== date);
  });
}

class Habit {
  habits: HabitModel[] = [];
  isLoading = false;

  entries: IEntry[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  *loadHabits() {
    this.isLoading = true;
    try {
      const raw: IHabit[] = yield loadHabits();
      this.habits = raw.map((h: IHabit) => new HabitModel(h));
    } finally {
      this.isLoading = false;
    }
  }

  *createHabit(title: string, description = '', countToComplete = 1) {
    const newHabit: Omit<IHabit, 'id'> = {
      title,
      description,
      createdAt: new Date().toISOString(),
      archived: false,
      countToComplete,
    };

    const createdHabit: IHabit = yield postNewHabit(newHabit);
    this.habits.push(new HabitModel(createdHabit));
  }

  *deleteHabit(id: string) {
    yield deleteHabit(id);
    this.habits = this.habits.filter((h) => h.id !== id);
  }

  // *archiveHabit(id: number) {
  //   yield api.patch(`/habits/${id}`, { archived: true });

  //   const habit = this.habits.find(h => h.id === id);
  //   if (habit) {
  //     habit.archived = true;
  //   }
  // }

  get activeHabits() {
    return this.habits.filter((h) => !h.archived);
  }

  get archivedHabits() {
    return this.habits.filter((h) => h.archived);
  }
}

export const habitStore = new Habit();
