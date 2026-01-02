function Spinner({ className }) {
  return (
    <div
      className={
        className +
        " border-4 border-[#447fdf] border-r-[#00000000] fade-in rounded-full aspect-square spin bg-[#141414]"
      }
    />
  );
}

export default Spinner;
