import clsx from "clsx";

const TableCell = ({ children, className }) => {
  return (
    <div
      className={clsx(
        "min-w-0 overflow-hidden px-3 py-3 text-right",
        "wrap-break-word",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default TableCell;
