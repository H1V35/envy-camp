import { Comment, Post } from "../types";

const API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts(): Promise<Post[]> {
  const POSTS_ENDPOINT = `${API_URL}/posts`;

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
    const post: Post = await res.json();

    return post;
  } catch (e) {
    throw new Error("Error loading post");
  }
}

export async function fetchComments(postId: string): Promise<Comment[]> {
  const url = `${API_URL}/posts/${postId}/comments`;
  try {
    const res = await fetch(url);
    const comments: Comment[] = await res.json();

    return comments;
  } catch (e) {
    throw new Error("Error loading comments");
  }
}
