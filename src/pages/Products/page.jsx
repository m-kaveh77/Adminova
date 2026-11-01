import { useState } from "react";
import { CiGrid41, CiViewTable } from "react-icons/ci";

import SectionTitle from "../../components/common/SectionTitle";
import Modal from "../../components/common/Modal/Modal";
import ProductTableView from "../../features/ProductsView/ProductTableView";
import ProductGridView from "../../features/ProductsView/ProductGridView";
import AddProductFields from "../../features/ProductsTable/components/AddProductFields";

import useLocalStorage from "../../hooks/useLocalStorage";
import useTitle from "../../hooks/useTitle";
import { products as initialProducts } from "../../data/products";

const Products = () => {
  useTitle("ادمینوا - محصولات");

  const [layoutType, setLayoutType] = useLocalStorage("layout", "TABLE");

  const [allProducts, setAllProducts] = useState(() =>
    initialProducts.map((product) => ({
      ...product,
      isPublished: product.isPublished ?? true,
    })),
  );

  const [paginatedProducts, setPaginatedProducts] = useState([]);

  const [newProduct, setNewProduct] = useState({
    id: 0,
    title: "",
    price: "",
    description: "",
    category: "",
    image: "",
    isPublished: true,
    count: "",
  });

  const toggleLayout = () => {
    setLayoutType(layoutType === "TABLE" ? "GRID" : "TABLE");
  };

  const createNewProduct = () => {
    const product = {
      ...newProduct,
      id: Math.max(0, ...allProducts.map((item) => item.id)) + 1,
      price: Number(newProduct.price),
    };

    setAllProducts((prev) => [...prev, product]);

    setNewProduct({
      id: 0,
      title: "",
      price: "",
      description: "",
      category: "",
      image: "",
      isPublished: true,
      count: "",
    });
  };

  const editProduct = (updatedProduct) => {
    setAllProducts((prev) =>
      prev.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, ...updatedProduct }
          : product,
      ),
    );
  };

  const removeProduct = (productId) => {
    setAllProducts((prev) =>
      prev.filter((product) => product.id !== productId),
    );
  };

  const changeProductVisibility = (productId) => {
    setAllProducts((prev) =>
      prev.map((product) =>
        product.id === productId
          ? { ...product, isPublished: !product.isPublished }
          : product,
      ),
    );
  };

  const Buttons = (
    <div className="mb-5 flex items-center justify-between gap-4">
      <div className="flex items-center rounded-xl border border-gray-200 bg-white p-1 shadow-sm">
        <button
          type="button"
          onClick={toggleLayout}
          aria-label={layoutType === "TABLE" ? "نمایش کارتی" : "نمایش جدولی"}
          className="flex size-10 items-center justify-center rounded-lg text-xl text-gray-500 transition hover:bg-gray-100 hover:text-purple-600 active:scale-95 cursor-pointer"
        >
          {layoutType === "TABLE" ? <CiGrid41 /> : <CiViewTable />}
        </button>
      </div>

      <Modal
        title="ایجاد محصول جدید"
        Trigger={
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-purple-700 active:scale-[0.98] cursor-pointer"
          >
            <span className="text-lg leading-none">+</span>
            <span>ایجاد محصول</span>
          </button>
        }
        onSubmit={createNewProduct}
      >
        <AddProductFields newProduct={newProduct} onChange={setNewProduct} />
      </Modal>
    </div>
  );

  return (
    <>
      <SectionTitle title="محصولات" Buttons={Buttons} />

      <section className="mt-6 w-full">
        {layoutType === "TABLE" ? (
          <ProductTableView
            products={allProducts}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
            removeProduct={removeProduct}
            changeProductVisibility={changeProductVisibility}
            editProduct={editProduct}
          />
        ) : (
          <ProductGridView
            products={allProducts}
            paginatedProducts={paginatedProducts}
            setProducts={setPaginatedProducts}
            removeProduct={removeProduct}
            changeProductVisibility={changeProductVisibility}
            editProduct={editProduct}
          />
        )}
      </section>
    </>
  );
};

export default Products;
