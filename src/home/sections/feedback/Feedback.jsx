import Lottie from "lottie-react";
import lottieFeedback from "../../../assets/lotties/feedback.json";

const Feedback = () => {
  return (
    <div className="text-center py-35 lg:w-9/12 mx-auto">
      <div className="space-y-4 mb-6">
        <h1 className="lg:text-8xl text-5xl font-bold">Hear From Our Users</h1>
        <p className="sm:text-3xl text-xl font-medium">
          We invite you to give feedback. <br /> We welcome your feedback. We
          want to provide better services.
        </p>
      </div>
      <div className="lottie-icon mt-10 flex justify-center items-center gap-4 lg:flex-row flex-col">
        <Lottie animationData={lottieFeedback}/>
        <p className="flex-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolores tenetur ipsa nesciunt hic officiis, sit esse modi impedit doloribus, commodi assumenda minus distinctio eveniet veniam quisquam quia, reiciendis dicta.</p>
      </div>
    </div>
  );
};

export default Feedback;
