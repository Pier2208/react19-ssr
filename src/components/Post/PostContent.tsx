interface PostContentProps {
  title: string;
  description: string;
}

export default function PostContent({ title, description }: PostContentProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl text-slate-800">{title}</h2>
      <div className="border h-1 bg-slate-300 my-2" />
      <p className="text-sm font-medium text-slate-500 italic"> {description}</p>
    </div>
  );
}