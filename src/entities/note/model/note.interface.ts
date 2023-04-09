export type TNote = {
  id: string;
  name: string;
  text: string;
  category: string;
};

export type TNoteNew = {
  name: string;
  text: string;
  category: string;
};

export type TNotesState = {
  data: {
    [name: string]: TNote;
  };
  idList: string[];
};
