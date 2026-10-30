const TableHead = ({ children, className = "" }) => {
  return (
    <div
      className={`
        grid
        grid-cols-(--table-columns,repeat(var(--column-count,1),minmax(0,1fr)))
        border-b border-gray-200 bg-gray-50
        text-right text-xs font-semibold text-gray-500 sm:text-sm
        ${className}
      `}
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default TableHead;
