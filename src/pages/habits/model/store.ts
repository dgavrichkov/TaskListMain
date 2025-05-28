import { flow, makeAutoObservable } from 'mobx';
import { IEntry, IHabit } from './types';
import { deleteHabit, loadHabitEntries, loadHabits, postNewHabit } from '../api';
export class HabitModel {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  archived: boolean;

  entries: IEntry[] = [];

  constructor(data: IHabit) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.createdAt = data.createdAt;
    this.archived = data.archived;

    makeAutoObservable(this, {
      loadEntries: flow,
      // toggleEntry: flow
    });
  }

  *loadEntries() {
    const data: IEntry[] = yield loadHabitEntries(this.id);
    this.entries = data;
  }

  getEntryByDate(date: string): IEntry | undefined {
    return this.entries.find((e) => e.date === date);
  }

  // *toggleEntry(date: string) {
  //   const existing = this.getEntryByDate(date);
  //   if (existing) {
  //     const updated: IEntry = yield api.patch(`/entries/${existing.id}`, {
  //       completed: !existing.completed
  //     });
  //     existing.completed = updated.completed;
  //   } else {
  //     const newEntry: Omit<IEntry, 'id'> = {
  //       habitId: this.id,
  //       date,
  //       completed: true
  //     };
  //     const created: IEntry = yield api.post('/entries', newEntry);
  //     this.entries.push(created);
  //   }
  // }
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

  *createHabit(title: string, description = '') {
    const newHabit: Omit<IHabit, 'id'> = {
      title,
      description,
      createdAt: new Date().toISOString(),
      archived: false,
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
