import { useState } from "react";
import { FiPackage } from "react-icons/fi";

import { products } from "../../data/products";
import { productsTableColumns } from "../../data/productsTableColumns";

import Table from "../../components/common/Table/Table";
import Pagination from "../../components/common/Pagination";
import CardTitle from "../../components/common/Card/CardTitle";

const ProductsTable = () => {
  const [lastProducts, setLastProducts] = useState(products);

  return (
    <section className="mt-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between p-5">
        <CardTitle
          title="آخرین محصولات"
          subTitle="لیست محصولات ثبت شده در سیستم"
        />

        <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
          <FiPackage size={21} />
        </div>
      </div>

      <Table columns={productsTableColumns} data={lastProducts} />

      <Pagination
        data={products}
        itemsPerPage={5}
        onPageChange={setLastProducts}
      />
    </section>
  );
};

export default ProductsTable;
