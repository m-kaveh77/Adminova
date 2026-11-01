import clsx from "clsx";
import { FiEye, FiEyeOff, FiPackage } from "react-icons/fi";
import RemoveProductIcon from "../ProductsTable/components/RemoveProductIcon";
import ChangeVisibilityIcon from "../ProductsTable/components/ChangeVisibilityIcon";
import EditProductIcon from "../ProductsTable/components/EditProductIcon";

const ProductCard = ({
  product,
  removeProduct,
  changeProductVisibility,
  editProduct,
}) => {
  return (
    <article className=" group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/40 cursor-pointer">
      <header className=" relative h-56 w-full overflow-hidden border-b border-gray-100 bg-gray-50 ">
        <div className="flex h-full items-center justify-center p-5">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain transition-transform duration-500 group-hover:scale-105 w-2xl"
          />
        </div>
        <div className="absolute right-3 top-3">
          <span
            className={clsx(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5",
              "text-xs font-medium backdrop-blur-sm",
              product.isPublished
                ? "bg-green-50/95 text-green-600"
                : "bg-red-50/95 text-red-500",
            )}
          >
            {product.isPublished ? (
              <>
                <FiEye size={14} /> عمومی
              </>
            ) : (
              <>
                <FiEyeOff size={14} /> خصوصی
              </>
            )}
          </span>
        </div>
      </header>
      <main className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <span className=" inline-flex rounded-lg bg-purple-50 px-2.5 py-1 text-[11px] font-medium text-purple-600 ">
            {product.category}
          </span>
        </div>
        <h2
          className="line-clamp-2 min-h-12 text-sm font-bold leading-6 text-gray-800"
          title={product.title}
        >
          {product.title}
        </h2>
        <p className="mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-gray-400">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <FiPackage size={15} /> <span>موجودی</span>
          </div>
          <span className="text-xs font-semibold text-gray-600">
            {product.entity.toLocaleString("fa-IR") ?? 0} عدد
          </span>
        </div>
      </main>
      <footer className=" flex items-center justify-between border-t border-gray-100 bg-gray-50/70 px-4 py-3 ">
        <div className="flex items-baseline gap-1">
          <span className="text-base font-black text-gray-800">
            {Number(product.price).toLocaleString("fa-IR")}
          </span>
          <span className="text-[11px] text-gray-400"> تومان </span>
        </div>
        <div className="flex items-center gap-1">
          <RemoveProductIcon
            product={product}
            handler={removeProduct}
            className="flex size-4 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-red-50 hover:text-red-600 active:scale-90"
          />
          <ChangeVisibilityIcon
            product={product}
            handler={changeProductVisibility}
            className="flex size-4 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600 active:scale-90"
          />
          <EditProductIcon
            product={product}
            handler={editProduct}
            className="flex size-4 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90"
          />
        </div>
      </footer>
    </article>
  );
};
export default ProductCard;
