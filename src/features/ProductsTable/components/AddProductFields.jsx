import { FiImage, FiTag } from "react-icons/fi";

const AddProductFields = ({ newProduct, onChange }) => {
  const handleChange = (key, value) => {
    onChange({ ...newProduct, [key]: key === "price" ? Number(value) : value });
  };

  return (
    <div className="space-y-5">
      <div>
        <label
          htmlFor="product-title"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          عنوان محصول
        </label>
        <input
          id="product-title"
          type="text"
          placeholder="عنوان محصول را وارد کنید"
          value={newProduct.title}
          onChange={(event) => handleChange("title", event.target.value)}
          className=" h-11 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 "
        />
      </div>
      <div>
        <label
          htmlFor="product-entity"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          تعداد
        </label>
        <div className="relative">
          <FiTag
            size={17}
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 "
          />
          <input
            id="product-entity"
            type="number"
            placeholder="تعداد"
            value={newProduct.entity}
            onChange={(event) => handleChange("entity", event.target.value)}
            className=" h-11 w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 pr-10 pl-3.5 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 "
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="product-price"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          قیمت محصول
        </label>
        <div className="relative">
          <input
            id="product-price"
            type="number"
            min="0"
            step="0.01"
            placeholder="مثلاً 250000"
            value={newProduct.price}
            onChange={(event) => handleChange("price", event.target.value)}
            className=" h-11 w-full rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 pl-14 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 "
          />
          <span className=" pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 ">
            تومان
          </span>
        </div>
      </div>
      <div>
        <label
          htmlFor="product-image"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          آدرس تصویر
        </label>
        <div className="relative">
          <FiImage
            size={17}
            className=" pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 "
          />
          <input
            id="product-image"
            type="url"
            placeholder="https://example.com/image.jpg"
            value={newProduct.image}
            onChange={(event) => handleChange("image", event.target.value)}
            className=" h-11 w-full rounded-xl border border-gray-200 bg-gray-50/50 py-2 pr-10 pl-3.5 text-sm text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 "
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="product-description"
          className="mb-2 block text-sm font-medium text-gray-700"
        >
          توضیحات محصول
        </label>
        <textarea
          id="product-description"
          rows={5}
          placeholder="توضیحات محصول را وارد کنید..."
          value={newProduct.description}
          onChange={(event) => handleChange("description", event.target.value)}
          className=" min-h-32 w-full resize-none rounded-xl border border-gray-200 bg-gray-50/50 px-3.5 py-3 text-sm leading-6 text-gray-700 outline-none transition-all duration-200 placeholder:text-gray-400 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100 "
        />
      </div>
      {newProduct.image && (
        <div className=" overflow-hidden rounded-xl border border-gray-200 bg-gray-50 p-3 ">
          <p className="mb-3 text-xs font-medium text-gray-500">
            پیش‌نمایش تصویر
          </p>
          <div className="flex h-40 items-center justify-center rounded-lg bg-white">
            <img
              src={newProduct.image}
              alt={newProduct.title || "پیش‌نمایش محصول"}
              className="size-full object-contain p-3"
              onError={(event) => {
                event.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductFields;
