import Homepage from "@/pages/landingPage/HomePage";
import ListingPage from "@/pages/listingPage/ListingPage";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  {
    path: '',
    element: Homepage(),
  },
  {
    path: '/listing',
    element: ListingPage(),
  }
])