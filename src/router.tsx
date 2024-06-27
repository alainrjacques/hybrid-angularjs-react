import { useEffect, useRef } from "react";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { hybridAppStore } from "@/hybridAppStore";
import { routeRecords } from "@/routes/management";
import { useStore } from "zustand";
// import { GlobalModals } from "@/components/GlobalModals";

const AngularJSNavigateSync = () => {
  const navigate = useNavigate();
  const urlRoute = useStore(hybridAppStore, (state) => state.urlRoute);
  const previousUrlRoute = useRef(urlRoute);

  useEffect(() => {
    if (previousUrlRoute.current === urlRoute) return;
    previousUrlRoute.current = urlRoute;
    console.log(urlRoute);
    if (urlRoute) navigate(urlRoute, { replace: true });
  }, [navigate, urlRoute]);
  return null;
};

const router = createBrowserRouter([
  {
    element: (
      <>
        <AngularJSNavigateSync />
        {/* <GlobalModals /> */}

        <Outlet />
      </>
    ),
    errorElement: <>Oops</>,
    children: [
      {
        path: "*",
        element: <>OOHH?</>,
        errorElement: <></>,
      },
      ...routeRecords.map(({ path, element }) => ({
        path,
        element,
        errorElement: <>Oops</>,
      })),
    ],
  },
]);
export const RouteProviderDefined = () => <RouterProvider router={router} />;
