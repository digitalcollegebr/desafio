import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllArticles from './components/AllArticles/AllArticles.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: "/all",
    Component: AllArticles
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
