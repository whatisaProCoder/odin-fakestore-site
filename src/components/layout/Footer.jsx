function Footer({ className }) {
  return (
    <div
      className={
        className +
        " poppins w-full px-4 py-6 max-sm:text-sm text-md flex flex-row max-sm:flex-col gap-1 justify-center items-center"
      }
    >
      <div>
        <span className="font-bold">FakeStore</span> © 2025{" "}
        <a href="https://github.com/whatisaProCoder" target="_blank">
          whatisaProCoder
        </a>
        .
      </div>
      <div>All rights reserved.</div>
    </div>
  );
}

export default Footer;
