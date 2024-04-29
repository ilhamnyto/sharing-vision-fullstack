import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

export default function Pagination({
  currentPage,
  totalPage,
  changePageHandler,
}) {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPage) {
      changePageHandler(page);
    }
  };

  const nextHandler = () => {
    if (currentPage < totalPage) {
      changePageHandler(currentPage + 1);
    }
  };

  const prevHandler = () => {
    if (currentPage > 1) {
      changePageHandler(currentPage - 1);
    }
  };

  const getPageNumbers = () => {
    const paginationSize = 5;
    const pages = [];
    if (totalPage <= paginationSize) {
      for (let i = 1; i <= totalPage; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(
        1,
        currentPage - Math.floor(paginationSize / 2)
      );
      const endPage = Math.min(totalPage, startPage + paginationSize - 1);

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push("...");
        }
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPage) {
        if (endPage < totalPage - 1) {
          pages.push("...");
        }
        pages.push(totalPage);
      }
    }

    return pages;
  };

  return (
    <div className="mt-5 flex gap-1">
      <button
        className="flex items-center p-3 bg-white drop-shadow-sm"
        onClick={() => prevHandler()}
      >
        <ChevronLeftIcon />
      </button>
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => handleClick(page)}
          className={
            currentPage == page
              ? "bg-blue-500 flex items-center p-3 drop-shadow-sm text-white font-bold"
              : "bg-white flex items-center p-3 drop-shadow-sm"
          }
        >
          {page}
        </button>
      ))}
      <button
        className="flex items-center p-3 bg-white drop-shadow-sm"
        onClick={() => nextHandler()}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}
