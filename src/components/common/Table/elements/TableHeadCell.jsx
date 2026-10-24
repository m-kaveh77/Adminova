const TableHeadCell = ({ children, className = "" }) => {
  return (
    <div className={`min-w-0 px-3 py-3.5 text-right ${className}`}>
      {children}
    </div>
  );
};

export default TableHeadCell;
