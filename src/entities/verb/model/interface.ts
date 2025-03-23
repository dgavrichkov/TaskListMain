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
  id: number;
  label: string;
};

export type TPhrasalVerb = {
  id: number;
  words: number[];
  meaning: string;
  translation: {
    ru: string;
  };
  examples: string[];
};
