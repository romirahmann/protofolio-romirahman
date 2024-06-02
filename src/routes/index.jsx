import { createBrowserRouter } from "react-router-dom";
import LandingPageLayout from "../layouts/LandingPage";
import LandingPage from "../pages/LandingPage";
import ErrorPage from "../component/errorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
    ],
  },
]);
