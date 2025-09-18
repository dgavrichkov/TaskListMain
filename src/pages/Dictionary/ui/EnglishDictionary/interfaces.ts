type TDefinition = {
  definition: string;
  synonyms: string[];
  antonyms: string[];
};

export type TDictApiResponse = {
  word: string;
  phonetic: string;
  phonetics: unknown[];
  meanings: {
    partOfSpeech: string; // todo - maybe union
    definitions: TDefinition[];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    sourceUrls: string[];
  };
};
