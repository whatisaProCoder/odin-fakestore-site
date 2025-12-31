function FeatureCard({ featureObject }) {
  return (
    <div className="bg-[#14161a] border border-[#202227] rounded-md p-6 transition-transform hover:-translate-y-1 max-sm:text-center">
      <div className="inter font-bold text-md">{featureObject.title}</div>
      <div className="mt-4 inter font-normal text-md max-sm:text-sm">
        {featureObject.description}
      </div>
    </div>
  );
}

export default FeatureCard;
