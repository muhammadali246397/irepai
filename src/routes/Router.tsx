import App from "@/App";
import Home from "@/pages/Home";
import AboutSection from "@/pages/home/AboutSection";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
{
    path:'/',
    element:<App></App>,
    children:[
        {
        index:true,
        element:<Home></Home>
        },
        {
            path:'about',
            element:<AboutSection></AboutSection>
        }
    ]
    
}
])

export default router