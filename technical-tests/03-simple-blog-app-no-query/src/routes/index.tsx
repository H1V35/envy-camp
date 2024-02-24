import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "../pages/Error";
import HomePage from "../pages/Home";
import PostPage from "../pages/Post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/post/:postId",
    element: <PostPage />,
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
