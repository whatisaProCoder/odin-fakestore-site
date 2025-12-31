import { FeaturesInfo } from "../../constants/features";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="py-16 max-sm:py-10 flex flex-row justify-center items-center">
      <div className="max-w-350 px-20 max-sm:px-10 w-full">
        <div className="poppins text-xl font-semibold max-sm:text-md">
          Features
        </div>
        <div className="mt-10 mb-5 grid grid-cols-3 max-md:grid-cols-1 gap-6">
          {FeaturesInfo.map((obj) => (
            <FeatureCard key={obj.id} featureObject={obj} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
