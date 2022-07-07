import React, { useState } from "react";
import { dataHeader, tableItem } from "../dataMock";
import "./DataTables.css";
import PaginationComponent from "./Pagination";

const DataTables = () => {
  const [valueSearch, setValueSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = tableItem.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filterSearch = (item, valueSearch) => {
    /* let searchFirstName = item.firstName.toLowerCase().includes(valueSearch);
    let searchLastName = item.lastName.toLowerCase().includes(valueSearch);
    if (searchFirstName) return true;
    if (searchLastName) return true; */
    const columns = Object.values(item);
    console.log(columns);

    const search = columns.map((item) => {
      console.log(item);
      return item.toLowerCase().toString().includes(valueSearch);
    });
    if (search) return true;
  };

  return (
    <div className="table">
      <div className="search-bar">
        <input
          type="search"
          placeholder="Search"
          onChange={(e) => {
            setValueSearch(e.target.value.toLowerCase());
          }}
        />
        <p> Show {postsPerPage} entries</p>
        <select
          onChange={(e) => {
            setPostsPerPage(parseInt(e.target.value));
          }}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <table>
        <thead>
          <tr>
            {dataHeader.map((data, index) => {
              return <th key={index}>{data}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {currentPosts

            .filter((item) => filterSearch(item, valueSearch))
            .map((item) => {
              return Object.values(item);
            })
            .map((items, index) => {
              return (
                <tr key={index}>
                  {items.map((item, index) => {
                    return <td key={index}>{item}</td>;
                  })}
                </tr>
              );
            })
            .filter((item) => parseInt(item.key) < postsPerPage)}
        </tbody>
      </table>
      <PaginationComponent
        postsPerPage={postsPerPage}
        totalPosts={tableItem.length}
        paginate={paginate}
      />
    </div>
  );
};

export default DataTables;
