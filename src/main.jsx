import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./components/App";
import { ErrorRoute } from "./components/Error";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Courses } from "./pages/Courses";
import { CourseInfo } from "./pages/CoursesInfo/";
import { ThemeProvider } from "@material-tailwind/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorRoute />,
  },
  {
    path: "courses",
    element: <Courses />,
  },
  {
    path: "/courses/:id",
    element: <CourseInfo />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>
  // </React.StrictMode>
);
