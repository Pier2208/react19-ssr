import { Post } from "../types/Post";

export const getAll = async (): Promise<Post[]> => {
  try {
    const res = await fetch('http://localhost:8000/posts');
    const posts: Post[] = await res.json();
    return posts;
  }
  catch (err) {
    console.log('[GET_POSTS]', err);
    return [];
  }
}

export const add = async (post: Post): Promise<Post | null> => {
  try {
    const res = await fetch(`http://localhost:8000/posts`, {
      method: 'POST',
      body: JSON.stringify(post),
      headers: {
        'Content-type': 'application/json',
      },
    });
    const newPost = await res.json();
    return newPost
  }
  catch (err) {
    console.log('[ADD_POST', err)
    return null;
  }
}