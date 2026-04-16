import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import FriendDetails from "./pages/FriendDetails";
import { TimelineProvider } from "./context/TimelineProvider";
import ErrorText from "./pages/ErrorText";
import Timeline from "./pages/Timeline";
import Stats from "./pages/Stats";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "friend/:id",
        element: <FriendDetails />,
      },
      {
        path: "timeline",
        element: <Timeline />,
      },
      {
        path: "stats",
        element: <Stats />,
      },
      {
        path: "*",
        element: <ErrorText />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
  </StrictMode>,
);
