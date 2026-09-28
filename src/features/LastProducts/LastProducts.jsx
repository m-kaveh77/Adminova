import { FiPackage } from "react-icons/fi";
import { products } from "../../data/products";
import CardTitle from "../../components/common/Card/CardTitle";
import LastProductCard from "./components/LastProductCard";
import CardFooter from "../../components/common/Card/CardFooter";

const LastProducts = () => {
  const latestProducts = [...products].sort((a, b) => b.id - a.id).slice(0, 5);

  return (
    <section className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
      <div className="flex items-center justify-between border-b border-gray-100 p-5">
        <CardTitle title="آخرین محصولات" subTitle="جدیدترین محصولات ثبت شده" />

        <div className="flex size-11 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
          <FiPackage size={21} />
        </div>
      </div>

      <div className="divide-y divide-gray-100 cursor-pointer">
        {latestProducts.map((product) => (
          <LastProductCard key={product.id} {...product} />
        ))}
      </div>

      <CardFooter title="مشاهده همه محصولات" link="/products" />
    </section>
  );
};

export default LastProducts;
