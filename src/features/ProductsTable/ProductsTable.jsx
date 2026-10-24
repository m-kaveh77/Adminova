import { useState } from "react";
import { FiPackage } from "react-icons/fi";

import { products, productsTableHeadRow } from "../../data/products";

import Table from "../../components/common/Table/Table";
import TableHead from "../../components/common/Table/elements/TableHead";
import TableHeadCell from "../../components/common/Table/elements/TableHeadCell";
import TableBody from "../../components/common/Table/elements/TableBody";
import TableRow from "../../components/common/Table/elements/TableRow";
import TableCell from "../../components/common/Table/elements/TableCell";
import CardTitle from "../../components/common/Card/CardTitle";
import RemoveProductIcon from "./components/RemoveProductIcon";
import ChangeVisibilityIcon from "./components/ChangeVisibilityIcon";
import EditProductIcon from "./components/EditProductIcon";

const ProductsTable = () => {
  const [allProducts, setAllProducts] = useState(() =>
    products.map((product) => ({ ...product })),
  );
  const [lastProducts, setLastProducts] = useState([]);

  const formatPrice = (price) =>
    `${Number(price || 0).toLocaleString("fa-IR")} تومان`;

  const removeProduct = (id) => {
    setAllProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== id),
    );
  };

  const changeProductVisibility = (id) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isPublished: !product.isPublished }
          : product,
      ),
    );
  };

  const editProduct = (updatedProduct) => {
    setAllProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id
          ? { ...product, ...updatedProduct }
          : product,
      ),
    );
  };

  return (
    <section className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="mb-6">
        <CardTitle
          title="آخرین محصولات"
          subTitle="لیست محصولات ثبت شده در سیستم"
        />
      </div>

      <Table
        header={{
          title: "لیست محصولات",
        }}
        pagination={{
          items: allProducts,
          setItems: setLastProducts,
          itemsPerPage: 5,
        }}
      >
        <TableHead>
          {productsTableHeadRow.map((column) => (
            <TableHeadCell key={column}>{column}</TableHeadCell>
          ))}
        </TableHead>

        <TableBody>
          {lastProducts.length > 0 ? (
            lastProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="max-w-16">
                  <span className="font-medium text-gray-500">
                    {product.id}
                  </span>
                </TableCell>

                <TableCell className="min-w-48">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-gray-100 bg-gray-50 p-1">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.title}
                          loading="lazy"
                          className="size-full object-contain"
                        />
                      ) : (
                        <FiPackage className="text-gray-400" size={18} />
                      )}
                    </div>

                    <span
                      className="truncate font-medium text-gray-700"
                      title={product.title}
                    >
                      {product.title}
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <span
                    className={
                      product.isPublished
                        ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700"
                        : "inline-flex items-center gap-1.5 rounded-full bg-rose-50 px-2.5 py-1 text-xs font-medium text-rose-700"
                    }
                  >
                    <span
                      className={
                        product.isPublished
                          ? "size-1.5 rounded-full bg-emerald-500"
                          : "size-1.5 rounded-full bg-rose-500"
                      }
                    />
                    {product.isPublished ? "عمومی" : "خصوصی"}
                  </span>
                </TableCell>

                <TableCell>
                  <span className="whitespace-nowrap font-semibold text-gray-800">
                    {formatPrice(product.price)}
                  </span>
                </TableCell>

                <TableCell>
                  <div className="flex items-center justify-start gap-3 whitespace-nowrap">
                    <RemoveProductIcon
                      product={product}
                      handler={removeProduct}
                      className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 active:scale-90"
                    />
                    <ChangeVisibilityIcon
                      product={product}
                      handler={changeProductVisibility}
                      className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600 active:scale-90"
                    />
                    <EditProductIcon
                      product={product}
                      handler={editProduct}
                      className="flex size-5 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90"
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell className="w-full">
                <div className="w-full py-5 text-center text-sm text-gray-400">
                  محصولی برای نمایش وجود ندارد.
                </div>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </section>
  );
};

export default ProductsTable;
