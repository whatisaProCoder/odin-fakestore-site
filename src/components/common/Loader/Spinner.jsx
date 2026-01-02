function Spinner({ className }) {
  return (
    <div
      className={
        className +
        " border-[3.5px] border-[rgba(255,255,255,0.87)] border-r-[#101215] fade-in rounded-full aspect-square spin"
      }
    />
  );
}

export default Spinner;
