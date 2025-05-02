export type TVerbState = {
  wordReference: {
    data: {
      [name: string]: TWord;
    };
    idList: string[];
  };
  phrasalVerbs: {
    data: {
      [name: string]: TPhrasalVerb;
    };
    idList: string[];
  };
};

export type TWord = {
  id: string;
  label: string;
};

export type TPhrasalVerb = {
  id: number;
  title: string;
  words: string[];
  meaning: string;
  translation: {
    ru: string;
  };
  examples: string[];
};
