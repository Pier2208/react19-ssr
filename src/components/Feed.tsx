'use server';

import { usePost } from '../hooks/usePost';
import PostCard from './Post/PostCard';

export default function Feed() {
  const { optimisticPosts } = usePost();

  return (
    <section className="flex flex-col items-center gap-y-4 w-full mt-8">
      { optimisticPosts.map((post) => <PostCard key={post.id} post={post} />)}
    </section>
  );
}