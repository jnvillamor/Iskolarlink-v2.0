import Homepage from "@/pages/landingPage/HomePage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: '',
    element: Homepage(),
  }
])