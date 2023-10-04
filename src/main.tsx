import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LoginForm } from "./components/loginForm";
import { Posts } from "./components/posts";
import { SinglePost } from "./components/singlePost";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { UserProfile } from "./components/userProfile";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <LoginForm />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
    {
      path: "/posts/:id",
      element: <SinglePost />,
    },
    {
      path: "/profile",
      element: <UserProfile />,
    },
  ],
  { basename: "/react_q/" }
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
