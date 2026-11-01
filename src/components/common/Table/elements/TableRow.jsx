const TableRow = ({ children, className = "" }) => {
  return (
    <div
      className={`
        grid
        grid-cols-(--table-columns,repeat(var(--column-count,1),minmax(0,1fr)))
        cursor-pointer border-b border-gray-100 bg-white
        text-sm transition-colors last:border-b-0 hover:bg-purple-50/40
        ${className}
      `}
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default TableRow;
