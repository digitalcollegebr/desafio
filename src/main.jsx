import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllArticles from './components/AllArticles/AllArticles.jsx';
import UniqueArticle from './components/UniqueArticle/UniqueArticle.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/all",
    Component: AllArticles
  },
  {
    path: "/post/:id",
    Component: UniqueArticle
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
