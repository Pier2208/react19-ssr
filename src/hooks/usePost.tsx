import { useContext } from 'react';
import { PostContext } from '../context/PostContext';

export const usePost = () => useContext(PostContext);