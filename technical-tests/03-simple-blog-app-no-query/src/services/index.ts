import { Comment, Post } from "../types";
const API_URL = "https://jsonplaceholder.typicode.com";

export async function fetchPosts(): Promise<Post[]> {
  const url = `${API_URL}/posts`;
  try {
    const res = await fetch(url);
    const posts: Post[] = await res.json();
    return posts;
  } catch (e) {
    throw new Error("Error loading posts");
  }
}

export async function fetchPost(postId: string): Promise<Post> {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
  try {
    const res = await fetch(url);
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
