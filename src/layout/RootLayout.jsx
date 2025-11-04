import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import CircularDeterminate from "../components/CircularDeterminate/CircularDeterminate";

const RootLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center relative">
        {/* Radial Gradient Background from Bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Centered Loader */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <CircularDeterminate />
          <p className="text-slate-400 mt-4 text-lg font-medium">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen w-full relative">
        {/* Radial Gradient Background from Bottom */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(125% 125% at 50% 90%, #fff 40%, #475569 100%)",
            backgroundAttachment: "fixed",
          }}
        />
        {/* Your Content/Components */}
        <div className="relative z-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
