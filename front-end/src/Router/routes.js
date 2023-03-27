import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../components/About/About";
import Main from "../Layout/Main";

const router = createBrowserRouter([
    {
        path: '/', element: <Main></Main>, children: [
            {
                path: '/',
                element: <App></App>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default router;