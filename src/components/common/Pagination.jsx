import clsx from "clsx";
import { useEffect, useState } from "react";

const Pagination = ({ items = [], setItems, itemsPerPage = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const safeItems = Array.isArray(items) ? items : [];
  const safeItemsPerPage =
    Number.isFinite(Number(itemsPerPage)) && Number(itemsPerPage) > 0
      ? Math.floor(Number(itemsPerPage))
      : 5;

  const pagesCount = Math.ceil(safeItems.length / safeItemsPerPage);

  useEffect(() => {
    const nextPage = Math.min(currentPage, Math.max(pagesCount, 1));

    if (nextPage !== currentPage) {
      setCurrentPage(nextPage);
      return;
    }

    const startIndex = (currentPage - 1) * safeItemsPerPage;
    const endIndex = startIndex + safeItemsPerPage;

    const paginatedItems = [...safeItems].reverse().slice(startIndex, endIndex);

    setItems?.(paginatedItems);
  }, [currentPage, safeItems, safeItemsPerPage, pagesCount, setItems]);

  const changePageHandler = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > pagesCount) return;
    setCurrentPage(pageNumber);
  };

  const buttonClass = (active) =>
    clsx(
      "flex size-9 items-center justify-center rounded-lg text-sm font-medium transition-all duration-200 cursor-pointer",
      active
        ? "bg-purple-600 text-white shadow-sm shadow-purple-600/20 cursor-pointer"
        : "text-gray-600 hover:bg-purple-50 hover:text-purple-700 cursor-pointer",
    );

  if (pagesCount <= 1) return null;

  return (
    <div
      className="flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 bg-gray-50/70 px-4 py-4 sm:px-5"
      dir="rtl"
    >
      <p className="text-xs text-gray-500">
        صفحه <span className="font-semibold text-gray-800">{currentPage}</span>{" "}
        از <span className="font-semibold text-gray-800">{pagesCount}</span>
      </p>

      <div className="flex items-center gap-1.5">
        <button
          type="button"
          disabled={currentPage === 1}
          onClick={() => changePageHandler(currentPage - 1)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-purple-200 hover:text-purple-700 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
        >
          قبلی
        </button>

        {Array.from({ length: pagesCount }, (_, index) => {
          const pageNumber = index + 1;

          return (
            <button
              type="button"
              key={pageNumber}
              aria-label={`صفحه ${pageNumber}`}
              aria-current={currentPage === pageNumber ? "page" : undefined}
              onClick={() => changePageHandler(pageNumber)}
              className={buttonClass(currentPage === pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          type="button"
          disabled={currentPage === pagesCount}
          onClick={() => changePageHandler(currentPage + 1)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-600 transition hover:border-purple-200 hover:text-purple-700 disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
        >
          بعدی
        </button>
      </div>
    </div>
  );
};

export default Pagination;
