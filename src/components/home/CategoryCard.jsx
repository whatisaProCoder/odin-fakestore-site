function CategoryCard({ categoryImage, name }) {
  return (
    <div className="flex flex-col justify-center px-4 py-6 items-center bg-[#101215] transition-all duration-300 hover:bg-[#14161a]">
      <img src={categoryImage} alt={name} className="w-20 max-sm:w-18" />
      <div className="mt-6 poppins font-medium text-center max-sm:text-xs">
        {name}
      </div>
    </div>
  );
}

export default CategoryCard;
