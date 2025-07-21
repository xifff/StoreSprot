import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  if (totalPages <= 1) return null;

  return (
    <nav aria-label="Pagination">
      <ul className="pagination">
        {pages.map((page) => (
          <li
            className={`page-item ${page === currentPage ? "active" : ""}`}
            key={page}
            onClick={() => onPageChange(page)}
          >
            <button className="page-link">{page}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
