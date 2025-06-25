type TPaginateOption = {
  page?: number;
  pageSize?: number;
};

/** pagination filter efficiently slices the data array,
 * so you only get the subset of results that you want to display on the current page. */
export function paginate<T>(options: TPaginateOption) {
  const { page = 1, pageSize = 10 } = options;

  return (data: T[], query: string) => {
    // Query is not used here; it’s only for compatibility with our hook.
    const startIndex = (page - 1) * pageSize;

    return data.slice(startIndex, startIndex + pageSize);
  };
}
