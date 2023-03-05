const TYPICODE_BASE = "https://jsonplaceholder.typicode.com";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const PAGE_SIZE = 5;

export interface IPostsResponse {
  posts: IPost[];
  nextPage: number;
  hasNextPage: boolean;
}

export const fetchPosts = async ({
  pageParam = 0,
}): Promise<IPostsResponse> => {
  const res = await fetch(
    `${TYPICODE_BASE}/posts?_page=${pageParam + 1}&_limit=${PAGE_SIZE}`
  );
  const totalCount = parseInt(res.headers.get("x-total-count") || "");
  const hasNextPage = (pageParam + 1) * PAGE_SIZE < totalCount;

  const data = await res.json();
  return {
    posts: data,
    nextPage: pageParam + 1,
    hasNextPage,
  };
};
