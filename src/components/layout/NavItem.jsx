function NavItem({ children, active, onClick }) {
  return (
    <div className="flex flex-col select-none" onClick={onClick}>
      <div className="h-14 px-1 flex flex-row items-center gap-2 inter font-medium text-[0.9rem]">
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
