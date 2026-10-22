const TableHead = ({ children }) => {
  return (
    <div
      className="grid min-w-[900px] grid-cols-[100px_minmax(0,2.5fr)_minmax(130px,1fr)_minmax(150px,1.2fr)_120px] items-center border-b border-gray-200 bg-gray-50 text-right text-xs font-semibold text-gray-500 sm:text-sm"
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default TableHead;
