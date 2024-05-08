import { Post } from '../../types/Post';
import PostContent from './PostContent';

interface PostProps {
  post: Post;
}

export default function PostCard({ post }: PostProps) {
  return (
    <>
      <title>{post.title}</title>
      <meta name="description" content={post.message} />
      <article className="flex flex-col justify-between p-4 bg-slate-200 w-full border-1">
        <PostContent title={post.title} description={post.message} />
      </article>
    </>
  );
}
