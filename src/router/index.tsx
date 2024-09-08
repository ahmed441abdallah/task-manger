import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "../pages/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Error from "../pages/Error"
import Login from "../pages/Login"
import Register from "../pages/Register"
import TodoList from "../pages/TodoList"
import AddTask from "../pages/AddTask"
import Tasks from "../pages/Tasks"

const AppRouter = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootLayout/>,
            errorElement:<Error/>,
            children: [ 
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "about",
                    element: <About />
                },
                {
                    path: "tasks",
                    element: <Tasks />
                },
                {
                    path:'todos',
                    element:<TodoList/>
                },
                {
                    path:"add",
                    element:<AddTask/>
                },
                {
                    path:"login",
                    element:<Login/>
                },
                {
                    path:"register",
                    element:<Register/>
                }
                
            ]   
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default AppRouter;