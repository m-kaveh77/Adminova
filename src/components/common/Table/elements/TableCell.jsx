import clsx from "clsx";

const TableCell = ({ children, className }) => {
  return (
    <div className={clsx("min-w-0 px-3 py-3 text-right", className)}>
      {children}
    </div>
  );
};

export default TableCell;
