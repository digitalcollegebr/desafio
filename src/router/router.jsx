import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import Article1 from "../pages/article/article1"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "article1",
        element: <Article1/>
    }, 
])