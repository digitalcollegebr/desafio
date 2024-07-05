import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { Post } from "./page/post";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/post:id", element: <Post /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
