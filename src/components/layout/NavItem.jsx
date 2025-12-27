import { useMediaQuery } from "react-responsive";

function NavItem({ children, active, onClick }) {
  const isNotDesktop = useMediaQuery({ maxWidth: 900 });

  return (
    <div className="flex flex-col select-none" onClick={onClick}>
      <div
        className="h-16 mt-1 flex flex-row items-center gap-2.5 inter text-[1rem]"
        style={{
          paddingLeft: isNotDesktop ? "1rem" : "0.5rem",
          paddingRight: isNotDesktop ? "1rem" : "0.5rem",
        }}
      >
        {children}
      </div>
      <div
        className="w-full h-1 transition-colors"
        style={{ backgroundColor: active ? "#2573E9" : "" }}
      ></div>
    </div>
  );
}

export default NavItem;
