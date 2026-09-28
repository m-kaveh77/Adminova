const LastProductCard = ({
  id,
  image,
  title,
  category,
  isPublished,
  price,
}) => {
  return (
    <div
      key={id}
      className="flex items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-gray-50"
    >
      <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
        <img
          src={image}
          alt={title}
          className="size-full object-contain p-1.5"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="truncate text-sm font-semibold text-gray-800">
          {title}
        </h3>

        <div className="mt-1 flex items-center gap-2">
          <span className="text-xs text-gray-400">{category}</span>

          <span className="size-1 rounded-full bg-gray-300" />

          <span
            className={`text-xs font-medium ${
              isPublished ? "text-green-600" : "text-red-500"
            }`}
          >
            {isPublished ? "منتشر شده" : "پیش‌نویس"}
          </span>
        </div>
      </div>

      <div className="shrink-0 text-left">
        <p className="text-sm font-bold text-gray-700">
          {new Intl.NumberFormat("fa-IR").format(price)}
        </p>

        <span className="text-xs text-gray-400">تومان</span>
      </div>
    </div>
  );
};

export default LastProductCard;
