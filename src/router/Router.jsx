import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home";

import Statistics from "../pages/Statistics";
import DonationNav from "../pages/DonationNav";
import Donation from "../components/Donation";
import ErrorPage from "../pages/ErrorPage";



const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/donation.json')
            },
            {
                path: "/donation",
                element: <DonationNav></DonationNav>,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
                loader: () => fetch('/donation.json'),
            },
            {
                path: "/donations/:id",
                element: <Donation></Donation>,
                loader: () => fetch('/donation.json')
            },
        ],
    },
]);


export default Router;