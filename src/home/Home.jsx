import Navbar from "@/components/shared/Navbar";
import Hero from "./sections/Hero/Hero";
import Cta from "./sections/cta/Cta";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Preserving Memories, Celebrating Lives */}
      <Cta />
    </div>
  );
};

export default Home;
