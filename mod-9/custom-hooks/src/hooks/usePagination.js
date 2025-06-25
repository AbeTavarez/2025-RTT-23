import { useState } from "react";

function usePagination(totalItems, itemsPerPage = 10, initialPage = 1) {
  // The current active page number.
  const [currentPage, setCurrentPage] = useState(initialPage);

  // The total number of pages calculated based on totalItems and itemsPerPage.
  // Calculate totalPages correctly (e.g., using Math.ceil).
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // The starting index of items for the current page (0-based).
  // startIndex and endIndex should be calculated based on the currentPage and itemsPerPage
  const startIndex = (currentPage - 1) * itemsPerPage;

  // The ending index of items for the current page (0-based).
  const endIndex = startIndex + itemsPerPage;

  //  The actual number of items on the current page (useful for the last page).
  // itemsOnCurrentPage should correctly reflect the count for the last page if it’s not full.
  const itemsOnCurrentPage = totalItems.slice(startIndex, endIndex);
//   const itemsCountOnCurrentPage = itemsOnCurrentPage.length;

  // A function to jump to a specific page number.
  const setPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // A function to go to the next page.
  const nextPage = () => {
    // Ensure currentPage does not go below 1 or above totalPages
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // A function to go to the previous page.
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Boolean indicating if there is a next page.
  const canNextPage = currentPage < totalPages;

  // Boolean indicating if there is a previous page.
  const canPrevPage = currentPage > 1;

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    canNextPage,
    canPrevPage,
    setPage,
    prevPage,
    nextPage,
  };
}

export default usePagination;
