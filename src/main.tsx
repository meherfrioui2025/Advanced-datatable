import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

import App from "./pages/App.tsx";
import Layout from "./layout/layout.tsx";
import NotFoundPage from "./pages/not-found.tsx";

import "./index.css";
import Container from "./components/container/container.tsx";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/feature/:featureId",
        element: (
          <Container>
            <h1 className="text-2xl text-amber-600">
              Hello Feature coming soon
            </h1>
          </Container>
        ),
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
