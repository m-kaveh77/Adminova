import { tableGridColumns } from "../../../../data/products";

const TableRow = ({ children }) => {
  return (
    <div
      className={`${tableGridColumns} border-b border-gray-100 bg-white text-sm transition-colors last:border-b-0 hover:bg-purple-50/40 cursor-pointer`}
      dir="rtl"
    >
      {children}
    </div>
  );
};

export default TableRow;
