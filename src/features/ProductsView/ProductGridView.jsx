import Pagination from "../../components/common/Pagination";
import ProductCard from "./ProductCard";

const ProductGridView = ({
  products = [],
  paginatedProducts = [],
  setProducts,
}) => {
  return (
    <div>
      <div
        className="
          grid grid-cols-1 gap-5
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {paginatedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <Pagination data={products} itemsPerPage={5} onPageChange={setProducts} />
    </div>
  );
};

export default ProductGridView;
