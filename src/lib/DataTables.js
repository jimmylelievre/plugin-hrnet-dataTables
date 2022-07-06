import React, { useState } from "react";
import { dataHeader, tableItem } from "../dataMock";
import "./DataTables.css";

const DataTables = () => {
  const [valueSelect, setValueSelect] = useState(5);
  const [valueSearch, setValueSearch] = useState("");

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
        <p> Show {valueSelect} entries</p>
        <select
          onChange={(e) => {
            setValueSelect(e.target.value);
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
          {tableItem
            .filter((item) =>
              item.firstName.toLowerCase().includes(valueSearch)
            )
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
            .filter((item) => parseInt(item.key) < valueSelect)}
        </tbody>
      </table>
    </div>
  );
};

export default DataTables;
