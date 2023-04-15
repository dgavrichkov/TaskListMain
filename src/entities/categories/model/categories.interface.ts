export type TCategory = {
  id: string;
  title: string;
}

export type TCategoriesState = {
  categories: TCategory[],
  selectedCategories: {
    notes: string[],
    tasks: string[],
  }
}
