export type TCategory = {
  id: string;
  title: string;
};

export type TCategoriesState = {
  categories: TCategory[];
};

export type TCategoryExtended = TCategory & {
  selected: boolean;
};
