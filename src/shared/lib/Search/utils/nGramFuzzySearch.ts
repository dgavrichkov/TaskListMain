const generateNGrams = (str: string, n: number) => {
  const grams = [];

  for (let i = 0; i <= str.length - n; i++) {
    grams.push(str.slice(i, i + n));
  }

  return grams;
};

/** n-gram similarity algorithm */
export const nGramFuzzySearch = (value: string, query: string) => {
  const n = 2; // Default to bigrams (two-character sequences)

  const valueGrams = generateNGrams(value.toLowerCase(), n);
  const queryGrams = generateNGrams(query.toLowerCase(), n);

  const intersection = valueGrams.filter((gram) => queryGrams.includes(gram));

  return intersection.length / Math.max(valueGrams.length, queryGrams.length);
};
