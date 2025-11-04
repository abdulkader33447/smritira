import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <div className="min-h-screen w-full relative ">
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
