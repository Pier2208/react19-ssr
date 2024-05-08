import { Post } from '../types/Post';

//state
interface PostState {
  posts: Post[];
  isLoading: boolean;
}

// initial state
export const POSTS_INITIAL_STATE = {
  posts: [],
  isLoading: false,
};

// action types
export enum PostActionType {
  GET_POSTS = 'GET_POSTS',
  DELETE_POST = 'DELETE_POST',
  ADD_POST = 'ADD_POST',
  EDIT_POST = 'EDIT_POST',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
}

export type Actions =
  | { type: PostActionType.GET_POSTS; payload: { posts: Post[] } }
  | { type: PostActionType.DELETE_POST; payload: { postId: string } }
  | { type: PostActionType.ADD_POST; payload: { post: Post } }
  | { type: PostActionType.EDIT_POST; payload: { postId: string; postContent: Pick<Post, 'title' | 'message'> } }
  | { type: PostActionType.LOADING }
  | { type: PostActionType.LOADED };

//reducer
export const postsReducer = (state: PostState, action: Actions): PostState => {
  switch (action.type) {
    case PostActionType.GET_POSTS:
      return {
        ...state,
        posts: action.payload.posts,
      };
    case PostActionType.ADD_POST:
      return {
        ...state,
        posts: [action.payload.post, ...state.posts],
      };
    case PostActionType.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.payload.postId),
      };
    case PostActionType.EDIT_POST:
      return {
        ...state,
        posts: state.posts.map((post) => (post.id === action.payload.postId ? { ...post, ...action.payload.postContent } : post)),
      };

    case PostActionType.LOADED:
      return {
        ...state,
        isLoading: false,
      };

    case PostActionType.LOADING:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
};