import { createContext, useEffect, useOptimistic, useReducer } from 'react';
import { Post } from '../types/Post';
import { add, getAll } from '../services/postService';
import { POSTS_INITIAL_STATE, PostActionType, postsReducer } from '../reducers/postReducer';
import { v4 as uuidv4 } from 'uuid';

type PostContext = {
  optimisticPosts: Post[];
  isLoading: boolean;
  addPost: (post: Post) => Promise<void>;
  addOptimisticPost: (action: Post) => void;
};

export const PostContext = createContext<PostContext>({
  optimisticPosts: [],
  isLoading: false,
  addPost: async () => {},
  addOptimisticPost: (action: Post) => {
    action;
  },
});

export const PostContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [{ posts, isLoading }, dispatch] = useReducer(postsReducer, POSTS_INITIAL_STATE);
  const [optimisticPosts, addOptimisticPost] = useOptimistic(posts, (state, newPost: Post) => [
    ...state,
    {
      id: uuidv4(),
      title: newPost.title,
      message: newPost.message,
    },
  ]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await getAll();
        dispatch({
          type: PostActionType.GET_POSTS,
          payload: { posts },
        });
      } catch (err) {
        dispatch({
          type: PostActionType.GET_POSTS,
          payload: { posts: [] },
        });
      }
    };
    fetchPosts();
  }, []);

  const addPost = async (post: Post) => {
    try {
      await add(post);
      dispatch({
        type: PostActionType.ADD_POST,
        payload: { post },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <PostContext.Provider value={{ optimisticPosts, addOptimisticPost, addPost, isLoading }}>{children}</PostContext.Provider>
  );
};
