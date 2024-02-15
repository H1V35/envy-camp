import { Post } from "../types";

const POSTS_ENDPOINT = `https://jsonplaceholder.typicode.com/posts`;

export async function fetchPosts(): Promise<Post[]> {
  try {
    const res = await fetch(POSTS_ENDPOINT);
    const posts: Post[] = await res.json();

    return posts;
  } catch (e) {
    throw new Error("Error loading posts");
  }
}
