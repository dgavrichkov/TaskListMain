const TYPICODE_BASE = "https://jsonplaceholder.typicode.com";

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async (): Promise<IPost[]> => {
  const response = await fetch(`${TYPICODE_BASE}/posts?_page=1&_limit=10`);
  if (!response.ok) throw new Error("Failed to fetch posts");

  return response.json();
};
