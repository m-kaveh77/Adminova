import { tableGridColumns } from "../../../../data/products";

const TableHead = ({ children }) => {
  return (
    <div
      className={`${tableGridColumns} border-b border-gray-200 bg-gray-50 text-right text-xs font-semibold text-gray-500 sm:text-sm`}
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default TableHead;
