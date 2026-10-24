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
}) => {
  const hasPagination =
    pagination?.items &&
    typeof pagination.setItems === "function" &&
    Number(pagination.itemsPerPage) > 0;

  return (
    <div className="mt-6 min-w-full overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
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
