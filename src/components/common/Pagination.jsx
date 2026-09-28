import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Pagination = ({ data = [], itemsPerPage = 5, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = data.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    onPageChange?.(currentData);
  }, [currentPage, data]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  if (totalPages <= 1) {
    return null;
  }

  const changePage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <div className="flex items-center justify-center gap-2 border-t border-gray-100 px-5 py-4">
      {/* Previous */}
      <button
        type="button"
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        className="
          flex size-9 items-center justify-center rounded-lg
          border border-gray-200
          text-gray-600
          transition
          hover:bg-gray-100
          disabled:cursor-not-allowed
          disabled:opacity-40
          cursor-pointer
        "
      >
        <FiChevronRight size={18} />
      </button>

      {/* Pages */}
      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;

        return (
          <button
            key={page}
            type="button"
            onClick={() => changePage(page)}
            className={`
              flex size-9 items-center justify-center rounded-lg
              text-sm font-medium transition
              cursor-pointer
              ${
                currentPage === page
                  ? "bg-purple-600 text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-100"
              }
            `}
          >
            {new Intl.NumberFormat("fa-IR").format(page)}
          </button>
        );
      })}

      {/* Next */}
      <button
        type="button"
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="
          flex size-9 items-center justify-center rounded-lg
          border border-gray-200
          text-gray-600
          transition
          hover:bg-gray-100
          disabled:cursor-not-allowed
          disabled:opacity-40
          cursor-pointer
        "
      >
        <FiChevronLeft size={18} />
      </button>
    </div>
  );
};

export default Pagination;
