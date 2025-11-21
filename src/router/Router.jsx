import { createBrowserRouter } from "react-router";

import RootLayout from "../layout/RootLayout";
import Home from "../home/Home";
import Hero from "../home/sections/Hero/Hero";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Web from "@/pages/Web";
import Mobile from "@/pages/Mobile";

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
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/web",
        Component: Web,
      },
      {
        path: "/mobile",
        Component: Mobile,
      }
    ],
  },
]);
