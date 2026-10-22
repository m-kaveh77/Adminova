import clsx from "clsx";
import { FiEdit2, FiEye, FiEyeOff, FiPackage, FiTrash2 } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <article className=" group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-100/40 ">
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
                <FiEye size={14} /> منتشر شده
              </>
            ) : (
              <>
                <FiEyeOff size={14} /> مخفی شده
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
          className=" line-clamp-2 min-h-12 text-sm font-bold leading-6 text-gray-800 "
          title={product.title}
        >
          {product.title}
        </h2>
        <p className=" mt-2 line-clamp-2 min-h-10 text-xs leading-5 text-gray-400 ">
          {product.description}
        </p>
        <div className=" mt-4 flex items-center justify-between border-t border-gray-100 pt-3 ">
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <FiPackage size={15} /> <span>موجودی</span>
          </div>
          <span className="text-xs font-semibold text-gray-600">
            {product.count ?? 0} عدد
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
          <button
            type="button"
            title="ویرایش محصول"
            className=" flex size-8 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 active:scale-90 "
          >
            <FiEdit2 size={15} />
          </button>
          <button
            type="button"
            title={product.isPublished ? "مخفی کردن محصول" : "نمایش محصول"}
            className=" flex size-8 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-purple-50 hover:text-purple-600 active:scale-90 "
          >
            {product.isPublished ? <FiEyeOff size={16} /> : <FiEye size={16} />}
          </button>
          <button
            type="button"
            title="حذف محصول"
            className=" flex size-8 items-center justify-center rounded-lg text-gray-400 transition-all duration-200 hover:bg-red-50 hover:text-red-600 active:scale-90 "
          >
            <FiTrash2 size={16} />
          </button>
        </div>
      </footer>
    </article>
  );
};
export default ProductCard;
