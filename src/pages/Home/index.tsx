import Feed from '../../components/Feed';
import PostForm from '../../components/forms/PostForm';

const Home = () => {
  return (
    <>
      <title>Chat App</title>
      <meta name="description" content="Chat avec tes amis!" />
      <main className="w-full bg-slate-400 min-h-screen">
        <div className="flex flex-col items-center max-w-screen-sm mx-auto py-6">
          <h1 className="text-3xl text-slate-200 m-4">CHAT APP</h1>
          <PostForm />
          <Feed />
        </div>
      </main>
    </>
  );
};

export default Home;
