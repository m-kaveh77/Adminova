const TableRow = ({ children }) => {
  return (
    <div
      className="group grid min-w-225 grid-cols-[100px_minmax(0,2.5fr)_minmax(130px,1fr)_minmax(150px,1.2fr)_120px] items-center border-b border-gray-100 bg-white text-sm transition-colors last:border-b-0 hover:bg-purple-50/40 cursor-pointer"
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default TableRow;
