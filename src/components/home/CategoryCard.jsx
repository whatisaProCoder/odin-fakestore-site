function CategoryCard({ categoryImage, name, onClick }) {
  return (
    <div
      onClick={onClick}
      className="select-none flex flex-col justify-center px-4 py-6 items-center border border-[#202227] rounded-2xl transition-all duration-300 bg-[#14161a] hover:bg-[#1b1d20]"
    >
      <img src={categoryImage} alt={name} className="w-20 max-sm:w-18" />
      <div className="mt-6 inter font-medium text-center max-sm:text-sm">
        {name}
      </div>
    </div>
  );
}

export default CategoryCard;
