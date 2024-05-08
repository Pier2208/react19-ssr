import { Suspense } from "react";
import { PostContextProvider } from "./context/PostContext";
import { RouterProvider } from 'react-router-dom';
import { router } from "./router";

export default function App() {
  return (
    <PostContextProvider>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </PostContextProvider>
  );
}