import { TCategory } from '../model/categories.interface';

export const findCategoryByTitle = (categories: TCategory[], title: string) => {
  return categories.find((ctg) => ctg.title === title)
}
