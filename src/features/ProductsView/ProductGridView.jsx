import Pagination from "../../components/common/Pagination";
import ProductCard from "./ProductCard";

const ProductGridView = ({
  products = [],
  paginatedProducts = [],
  setProducts,
  removeProduct,
  changeProductVisibility,
  editProduct,
}) => {
  return (
    <div className="mb-20">
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
          <ProductCard
            key={product.id}
            product={product}
            removeProduct={removeProduct}
            changeProductVisibility={changeProductVisibility}
            editProduct={editProduct}
          />
        ))}
      </div>

      <Pagination items={products} setItems={setProducts} itemsPerPage={5} />
    </div>
  );
};

export default ProductGridView;
