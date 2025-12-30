function SlidingLoader({ percentage }) {
  return (
    <div className="bg-[#242C37] w-full h-1.5">
      <div
        className="h-full bg-[#2573E9] transition-all"
        style={{ width: percentage }}
      />
    </div>
  );
}

export default SlidingLoader;
