import { Comment, Post } from "../types";

export async function fetchPosts(): Promise<Post[]> {
  const POSTS_ENDPOINT = `https://jsonplaceholder.typicode.com/posts`;

  try {
    const res = await fetch(POSTS_ENDPOINT);
    const posts: Post[] = await res.json();

    return posts;
  } catch (e) {
    throw new Error("Error loading posts");
  }
}

export async function fetchPost(postEndpoint: string): Promise<Post> {
  try {
    const res = await fetch(postEndpoint);
    const posts: Post = await res.json();

    return posts;
  } catch (e) {
    throw new Error("Error loading post");
  }
}

export async function fetchComments(
  commentsEndpoint: string
): Promise<Comment[]> {
  try {
    const res = await fetch(commentsEndpoint);
    const comments: Comment[] = await res.json();

    return comments;
  } catch (e) {
    throw new Error("Error loading comments");
  }
}
