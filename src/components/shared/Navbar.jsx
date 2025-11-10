import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/icon.png";
import { Link } from "react-router";

export default function Navbar() {
  const [open, setOpen] = useState(false); // Hamburger menu open
  const [servicesOpen, setServicesOpen] = useState(false); // Mobile services submenu

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-500/30 backdrop-blur-xl fixed top-5 left-0 right-0 lg:w-7/12 md:w-10/12 w-11/12 mx-auto rounded-3xl z-50">
      {/* Logo */}
      <Link to="/" className="text-lg font-bold">
        <img className="w-10 h-10" src={logo} alt="logo" />
      </Link>

      {/* Desktop / Tablet Menu */}
      <div className="hidden md:flex items-center gap-2">
        <Button>Home</Button>
        <Button>About</Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button>Services</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-gray-500/50 backdrop-blur-xl">
            <DropdownMenuItem>Web</DropdownMenuItem>
            <DropdownMenuItem>Mobile</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button>Contact</Button>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden relative">
        <Button onClick={() => setOpen(!open)} className="p-3">
          <svg
            className="w-12 h-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </Button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 px-2 mx-auto bg-gray-500 backdrop-blur-xl rounded-lg flex flex-col shadow-lg">
            <Link
              to="/"
              className="px-4 py-2 hover:bg-gray-400/30 rounded"
              onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link
              to="/about"
              className="px-4 py-2 hover:bg-gray-400/30 rounded"
              onClick={() => setOpen(false)}>
              About
            </Link>

            {/* Mobile Services Submenu */}
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="px-4 py-2 text-left hover:bg-gray-400/30 rounded w-full cursor-pointer">
              Services
            </button>
            {servicesOpen && (
              <div className="flex flex-col pl-4 bg-gray-500/60 backdrop-blur-md">
                <Link
                  to="/web"
                  className="px-4 py-2 hover:bg-gray-400/30 rounded"
                  onClick={() => setOpen(false)}>
                  Web
                </Link>
                <Link
                  to="/mobile"
                  className="px-4 py-2 hover:bg-gray-400/30 rounded"
                  onClick={() => setOpen(false)}>
                  Mobile
                </Link>
              </div>
            )}

            <Link
              to="/contact"
              className="px-4 py-2 hover:bg-gray-400/30 rounded"
              onClick={() => setOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
