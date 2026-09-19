import { FiSearch } from "react-icons/fi";

const SearchInput = () => {
  return (
    <div className="relative w-full max-w-md">
      <FiSearch
        size={20}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition-colors duration-200 peer-focus:text-purple-500"
      />
      <input
        type="text"
        placeholder="جستجو کنید."
        className=" peer w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pr-11 pl-20 text-sm text-gray-700 outline-none transition-all duration-300 placeholder:text-gray-400 hover:border-gray-300 hover:bg-white focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 focus:shadow-lg focus:shadow-purple-100/50"
      />
      <div className=" pointer-events-none absolute left-3 top-1/2 flex -translate-y-1/2 items-center gap-1 rounded-md border border-gray-200 bg-white px-2 py-1 text-[11px] font-medium text-gray-400 shadow-sm ">
        <span>Ctrl</span> <span>+</span> <span>K</span>
      </div>
    </div>
  );
};

export default SearchInput;
