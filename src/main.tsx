import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import Container from "./components/container/container.tsx";
import FeatureDetail from "./pages/feature-detail.tsx";
import MainLayout from "./layout/main-layout.tsx";
import NotFoundPage from "./pages/not-found.tsx";
import Layout from "./layout/layout.tsx";
import App from "./pages/App.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/docs",
        element: (
          <Container>
            <h1 className="text-2xl text-amber-600">
              Documentation will coming soon
            </h1>
          </Container>
        ),
      },
      {
        path: "/examples",
        element: (
          <Container>
            <h1 className="text-2xl text-amber-600">
              Examples will coming soon
            </h1>
          </Container>
        ),
      },
    ],
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/feature/:featureId",
        element: <FeatureDetail />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
