import Filter from "./Filter";
import Search from "./Search";

const TableHeader = ({ header = {} }) => {
  const { title = "لیست آیتم‌ها", Buttons, showFilter = false } = header;

  return (
    <div className="flex min-h-16 flex-wrap items-center justify-between gap-4 border-b border-gray-100 px-4 py-4 sm:px-5">
      <h2 className="text-base font-bold text-gray-800 sm:text-lg">{title}</h2>

      {typeof Buttons === "function" ? (
        <div className="flex items-center gap-2">
          <Buttons />
        </div>
      ) : showFilter ? (
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-gray-500 transition focus-within:border-purple-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-500/10 sm:flex-none">
            <Filter />
          </div>

          <div className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 text-gray-500 transition focus-within:border-purple-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-purple-500/10 sm:flex-none">
            <Search />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TableHeader;
