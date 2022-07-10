import React, { useState } from "react";
import { dataHeader, tableItem } from "../dataMock";
import "./DataTables.css";
import PaginationComponent from "./Pagination";

const DataTables = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [data, setData] = useState(tableItem);
  const [order, setOrder] = useState(1);
  const [activeCategorie, setActiveCategorie] = useState(
    Object.keys(data[0])[0]
  );

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

  const switchCategorie = (categorie) => {
    return activeCategorie === categorie
      ? setOrder(order === 1 ? -1 : 1)
      : setActiveCategorie(categorie);
  };

  const sortData = () => {
    const newData = data.sort((a, b) => {
      if (!a[activeCategorie]) return -1;
      if (!b[activeCategorie]) return 1;
      return a[activeCategorie].localeCompare(b[activeCategorie]);
    });
    return setData([...newData]);
  };
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

        <div>
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
                  onClick={() => {
                    switchCategorie(data);
                    sortData();
                  }}
                  key={index}
                >
                  {data}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentPosts
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
