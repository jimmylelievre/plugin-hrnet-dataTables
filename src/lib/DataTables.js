import React, { useState } from "react";
import "./DataTables.css";
import PaginationComponent from "./Pagination";

const DataTables = ({ dataHeader, tableItem }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [data, setData] = useState(tableItem);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const getFilteredItems = (value) => {
    if (!value) {
      return setData(tableItem);
    } else {
      const newData = [];
      tableItem.forEach((object) => {
        Object.keys(object).forEach((key) => {
          if (object[key].toLowerCase().includes(value)) {
            if (!newData.includes(object)) return newData.push(object);
          }
        });
      });
      setData(newData);
    }
  };

  const switchIconOrderCss = (e) => {
    const order = e.target.dataset.order;

    if (order === "asc") {
      const rows = document.querySelectorAll("th");
      rows.forEach((row) => {
        row.className = "sorting-asc";
      });
    }
    if (order === "desc") {
      const rows = document.querySelectorAll("th");
      rows.forEach((row) => {
        row.className = "sorting-desc";
      });
    }
  };

  const switchOrder = (e) => {
    const column = e.target.dataset.column;
    const order = e.target.dataset.order;

    if (order === "asc") {
      e.target.dataset.order = "desc";
      const newData = [...data].sort((a, b) =>
        a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1
      );
      setData(newData);
    }
    if (order === "desc") {
      e.target.dataset.order = "asc";
      const newData = [...data].sort((a, b) =>
        a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1
      );
      setData(newData);
    }
  };

  const tableData = currentPosts.map((row, index) => {
    let rowData = [];
    let i = 0;

    for (const key in row) {
      rowData.push({
        key: dataHeader[i],
        val: row[key],
      });
      i++;
    }

    return (
      <tr key={index}>
        {rowData.map((data, index) => (
          <td key={index} data-heading={data.key}>
            {data.val}
          </td>
        ))}
      </tr>
    );
  });

  return (
    <div className="table">
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            getFilteredItems(e.target.value.toLowerCase());
          }}
        />

        <div className="select">
          Show
          <select
            onChange={(e) => {
              setPostsPerPage(parseInt(e.target.value));
            }}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          entries
        </div>
      </div>

      <table>
        <thead>
          <tr>
            {dataHeader.map((data, index) => {
              return (
                <th
                  data-order="desc"
                  data-column={data.toLowerCase()}
                  onClick={(e) => {
                    switchOrder(e);
                    switchIconOrderCss(e);
                  }}
                  key={index}
                >
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{tableData}</tbody>
      </table>
      <div className="footer-table">
        <p>
          Showing {indexOfFirstPost + 1} to{" "}
          {currentPosts.length + indexOfFirstPost} of {data.length} entries
        </p>
        <PaginationComponent
          postsPerPage={postsPerPage}
          totalPosts={data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default DataTables;
