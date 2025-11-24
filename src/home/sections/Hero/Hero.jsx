
import { Button } from "@/components/ui/button";
import lottiePhone from "../../../assets/lotties/lottiePhone.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="sm:pt-40 pt-35">
      <div className="hero-container text-center space-y-5">
        <h1 className="sm:text-6xl text-4xl font-bold">SMRITIRA</h1>
        <div className="sm:text-2xl text-lg font-medium">
          <p>
            Click Anyone, Save Here. <br /> Preserving Memories, Celebrating
            Lives
          </p>
        </div>
      </div>
      <div className="lottie-icon mt-10 flex justify-center">
        
        <Lottie
          // style={{ width: "380px" }}
          animationData={lottiePhone}
          loop={true}
        />
      </div>

       {/* CTA */}
        <div>
          <Button className="shadow-md transition duration-300">
            Get Started
          </Button>
        </div>
    </div>
  );
};

export default Hero;
