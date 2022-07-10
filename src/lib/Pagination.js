import React from "react";
import "./Pagination.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li
            onClick={() => {
              paginate(number);
            }}
            key={number}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            <a
              href="!#"
              className={`page-link ${
                currentPage === number ? "active-a" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
