import { createBrowserRouter } from "react-router";

import RootLayout from "../layout/RootLayout";
import Home from "../home/Home";
import Hero from "../home/pages/Hero/Hero";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/hero",
        Component: Hero,
      },
    ],
  },
]);
