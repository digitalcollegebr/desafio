import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import App from './App';
import {
  createBrowserRouter,
} from "react-router-dom";
import ArticleDetails from './components/ArticleDetails/articleDetail';
import ArticlesList from './components/ArticleList/articleList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/article/:id",
    element: <ArticleDetails/>,
  },
  {
    path: "/article",
    element: <ArticlesList/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
