import App from "@/App";
import AdminLayout from "@/layout/adminLayout/AdminLayout";
import Home from "@/pages/Home";
import AddService from "@/pages/admin/AddService";
import Admin from "@/pages/admin/Admin";
import ServiceList from "@/pages/admin/ServiceList";
import AboutSection from "@/pages/home/AboutSection";

import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <AboutSection></AboutSection>
            }
        ]

    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        children: [
            {
                index: true,
                element: <Navigate to='/admin/dashboard' />
            },
            {
                path: 'dashboard',
                element: <Admin />
            },
            {
                path: 'serviceList',
                element: <ServiceList />
            },
            {
                path: 'addService',
                element: <AddService />
            }
        ]
    }
])

export default router