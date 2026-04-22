import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { PATHS } from "./path";

// Lazy Loading
const Dashboard = React.lazy(() => import("../pages/Dashboard"));

export const Routes = createBrowserRouter([
  // Root redirect
  {
    path: "/",
    element: <Navigate to={PATHS.APP.DASHBOARD} replace />,
  },

  // Authenticated
  {
    path: PATHS.APP.ROOT,
    children: [
      {
        index: true,
        element: <Navigate to={PATHS.APP.DASHBOARD} replace />,
      },
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Dashboard />
          </Suspense>
        ),
      },
    ],
  },

]);
