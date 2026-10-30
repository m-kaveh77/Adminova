import withLoader from "../../../HOCs/withLoader";
import Pagination from "../Pagination";
import TableHeader from "./elements/TableHeader";

const Table = ({
  header = {
    title: "لیست آیتم‌ها",
    Buttons: undefined,
    showFilter: false,
  },
  children,
  pagination,
  columns,
}) => {
  const hasPagination =
    pagination?.items &&
    typeof pagination.setItems === "function" &&
    Number(pagination.itemsPerPage) > 0;

  // اگر عرض ستون‌ها مشخص نشده باشد، بعداً تعداد آن‌ها
  // به‌صورت خودکار از روی تعداد سلول‌ها تشخیص داده می‌شود.
  const tableStyle = columns
    ? {
        "--table-columns": columns
          .map((column) =>
            typeof column === "string"
              ? column
              : column.width || "minmax(0, 1fr)",
          )
          .join(" "),
      }
    : undefined;

  return (
    <div
      className="mt-6 min-w-0 max-w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
      style={tableStyle}
    >
      <TableHeader header={header} />

      <div className="overflow-x-auto">{children}</div>

      {hasPagination && (
        <Pagination
          items={pagination.items}
          setItems={pagination.setItems}
          itemsPerPage={pagination.itemsPerPage}
        />
      )}
    </div>
  );
};

export default withLoader(Table);
