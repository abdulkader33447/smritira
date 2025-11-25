
import lottiePhone from "../../../assets/lotties/lottiePhone.json";
import Lottie from "lottie-react";

const Hero = () => {
  return (
    <div className="sm:pt-40 py-35">
      <div className="hero-container text-center space-y-5">
        <h1 className="lg:text-8xl text-5xl font-bold">SMRITIRA</h1>
        <div className="sm:text-3xl text-xl font-medium">
          <p>
            Click Anyone, Save Here. <br /> Preserving Memories, Celebrating
            Lives.
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
    </div>
  );
};

export default Hero;
