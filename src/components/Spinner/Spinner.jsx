import lottieSpinner from "../../assets/lotties/lottie-icon.json";
import Lottie from "lottie-react";

const Spinner = () => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center">
      <Lottie animationData={lottieSpinner} loop={true} />
    </div>
  );
};

export default Spinner;
