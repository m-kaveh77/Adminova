export const productsTableColumns = [
  {
    key: "id",
    title: "شناسه",
    render: (product) => (
      <span className="font-medium text-gray-500">{product.id}</span>
    ),
  },
  {
    key: "image",
    title: "تصویر",
    render: (product) => (
      <img
        src={product.image}
        alt={product.title}
        className="size-15 rounded-lg border border-gray-100 object-contain p-1"
      />
    ),
  },
  {
    key: "title",
    title: "عنوان",
    render: (product) => (
      <div className="max-w-xs">
        {" "}
        <p className="truncate font-medium text-gray-800">
          {" "}
          {product.title}{" "}
        </p>{" "}
      </div>
    ),
  },
  {
    key: "category",
    title: "دسته‌بندی",
    render: (product) => (
      <span className="rounded-lg bg-purple-50 px-3 py-1.5 text-xs font-medium text-purple-600">
        {" "}
        {product.category}{" "}
      </span>
    ),
  },
  {
    key: "isPublished",
    title: "وضعیت",
    render: (product) => (
      <span
        className={` inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${product.isPublished ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"} `}
      >
        {" "}
        {product.isPublished ? "منتشر شده" : "پیش‌نویس"}{" "}
      </span>
    ),
  },
  {
    key: "price",
    title: "قیمت",
    render: (product) => (
      <span className="font-semibold text-gray-700">
        {" "}
        {new Intl.NumberFormat("fa-IR").format(product.price)}{" "}
        <span className="mr-1 text-xs text-gray-400"> تومان </span>{" "}
      </span>
    ),
  },
];
