const SummaryCard = ({ title, value, Icon }) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-gray-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-purple-200
        hover:shadow-lg
        hover:shadow-purple-100/50
        select-none
        cursor-pointer
      "
    >
      <div
        className="
          pointer-events-none
          absolute
          -left-8
          -top-8
          size-24
          rounded-full
          bg-purple-50
          opacity-0
          blur-2xl
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />
      <div className="relative flex items-center justify-between">
        <p className="text-sm font-medium text-gray-500">{title}</p>

        <div
          className="
            flex
            size-11
            items-center
            justify-center
            rounded-xl
            border
            border-purple-100
            bg-purple-50
            text-lg
            text-purple-600
            transition-all
            duration-300
            group-hover:bg-purple-600
            group-hover:text-white
            group-hover:shadow-md
            group-hover:shadow-purple-200
          "
        >
          <Icon />
        </div>
      </div>

      <div className="relative mt-5 flex items-end gap-2">
        <strong className="text-3xl font-bold tracking-tight text-gray-800">
          {new Intl.NumberFormat("fa-IR").format(value)}
        </strong>

        <span className="mb-1 text-xs font-medium text-gray-400">عدد</span>
      </div>

      <div
        className="
          absolute
          bottom-0
          right-0
          h-1
          w-0
          bg-purple-600
          transition-all
          duration-300
          group-hover:w-full
        "
      />
    </article>
  );
};

export default SummaryCard;
