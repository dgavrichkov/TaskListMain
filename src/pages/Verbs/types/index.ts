export type TWord = {
  id: string;
  label: string;
};

export type TPharasalVerb = {
  id: string;
  words: string[];
  meaning: string;
  translation: {
    ru: string;
  };
  examples: string[];
};
