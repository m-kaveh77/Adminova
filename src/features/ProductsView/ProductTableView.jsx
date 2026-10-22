import { productsTableColumns } from "../../data/productsTableColumns";
import Table from "../../components/common/Table/Table";
import Pagination from "../../components/common/Pagination";

const ProductTableView = ({ products, paginatedProducts, setProducts }) => {
  const handleEdit = (product) => {
    console.log("Edit:", product);
  };

  const handleTogglePublish = (product) => {
    console.log("Toggle publish:", product);
  };

  const handleDelete = (product) => {
    console.log("Delete:", product);
  };

  const columns = productsTableColumns({
    onEdit: handleEdit,
    onTogglePublish: handleTogglePublish,
    onDelete: handleDelete,
  });

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <Table columns={columns} data={paginatedProducts} />

      <Pagination data={products} itemsPerPage={5} onPageChange={setProducts} />
    </section>
  );
};

export default ProductTableView;
