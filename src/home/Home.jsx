import Navbar from "@/components/shared/Navbar";
import Hero from "./sections/Hero/Hero";
import Cta from "./sections/cta/Cta";
import Feedback from "./sections/feedback/Feedback";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Preserving Memories, Celebrating Lives */}
      <Cta />
      <Feedback />
    </div>
  );
};

export default Home;
