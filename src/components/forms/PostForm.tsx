import { Plus } from 'lucide-react';
import { usePost } from '../../hooks/usePost';
import { Post } from '../../types/Post';
import { v4 as uuidv4 } from 'uuid';

export default function PostForm() {
  const { addPost, addOptimisticPost } = usePost();

  // https://react.dev/reference/rsc/use-server#server-actions-in-forms
  const formAction = async (formData: FormData): Promise<void> => {
    'use server';
    const newPost: Post = {
      id: uuidv4(),
      title: formData.get('title') as string,
      message: formData.get('message') as string,
    };

    addOptimisticPost(newPost);
    await addPost(newPost);
  };

  return (
    <form action={formAction} className="flex flex-col w-full gap-y-8">
      <input type="text" className="w-full p-2" name="title" />
      <textarea className="p-2" name="message" rows={3}></textarea>
      <button
        type="submit"
        className="h-10 text-white bg-slate-500 flex items-center justify-center cursor-pointer hover:bg-slate-100"
      >
        Submit
        <Plus />
      </button>
    </form>
  );
}
