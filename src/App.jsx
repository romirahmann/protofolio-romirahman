import { RouterProvider, useLocation } from "react-router-dom";
import { router } from "./routes";
import { useEffect } from "react";
import { logPageView } from "./gtag";

const Analytics = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname);
  }, [location]);

  return null;
};

function App() {
  return (
    <>
      <div>
        <RouterProvider router={router}>
          <Analytics />
        </RouterProvider>
      </div>
    </>
  );
}

export default App;
