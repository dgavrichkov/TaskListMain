import { ENTITY_NAMES } from '../constants';

export type TFilterState = {
  notes: string[];
  tasks: string[];
}

export type TFilterablePages = typeof ENTITY_NAMES[keyof typeof ENTITY_NAMES];

export type TFilterEntity = {
  id: string;
  entityType: TFilterablePages;
}
