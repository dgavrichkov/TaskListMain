import { makeAutoObservable } from 'mobx';
import { IHabit } from './types';
import { deleteHabit, loadHabits, postNewHabit } from '../api';

class Habit {
  habits: IHabit[] = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  *loadHabits() {
    this.isLoading = true;
    try {
      const data: IHabit[] = yield loadHabits();
      this.habits = data;
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

    const created: IHabit = yield postNewHabit(newHabit);
    this.habits.push(created);
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
