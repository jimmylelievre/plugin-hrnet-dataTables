"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard").default;

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault").default;

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("./DataTables.css");

var _Pagination = _interopRequireDefault(require("./Pagination"));

var DataTables = function DataTables(_ref) {
  var dataHeader = _ref.dataHeader,
      tableItem = _ref.tableItem;

  var _useState = (0, _react.useState)(1),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      currentPage = _useState2[0],
      setCurrentPage = _useState2[1];

  var _useState3 = (0, _react.useState)(5),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      postsPerPage = _useState4[0],
      setPostsPerPage = _useState4[1];

  var _useState5 = (0, _react.useState)(tableItem),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      data = _useState6[0],
      setData = _useState6[1];

  var _useState7 = (0, _react.useState)(1),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      order = _useState8[0],
      setOrder = _useState8[1];

  var _useState9 = (0, _react.useState)(Object.keys(data[0])[0]),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      activeCategorie = _useState10[0],
      setActiveCategorie = _useState10[1]; // Get current posts


  var indexOfLastPost = currentPage * postsPerPage;
  var indexOfFirstPost = indexOfLastPost - postsPerPage;
  var currentPosts = data.slice(indexOfFirstPost, indexOfLastPost); // Change page

  var paginate = function paginate(pageNumber) {
    return setCurrentPage(pageNumber);
  };

  var getFilteredItems = function getFilteredItems(value) {
    if (!value) {
      return setData(tableItem);
    } else {
      var newData = [];
      tableItem.forEach(function (object) {
        Object.keys(object).forEach(function (key) {
          if (object[key].toLowerCase().includes(value)) {
            if (!newData.includes(object)) return newData.push(object);
          }
        });
      });
      setData(newData);
    }
  };

  var switchCategorie = function switchCategorie(categorie) {
    return activeCategorie === categorie ? setOrder(order === 1 ? -1 : 1) : setActiveCategorie(categorie);
  };

  var sortData = function sortData() {
    var newData = data.sort(function (a, b) {
      if (!a[activeCategorie]) return -1;
      if (!b[activeCategorie]) return 1;
      return a[activeCategorie].localeCompare(b[activeCategorie]);
    });
    return setData((0, _toConsumableArray2.default)(newData));
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "table"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "search-bar"
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "search",
    placeholder: "Search",
    onChange: function onChange(e) {
      getFilteredItems(e.target.value.toLowerCase());
    }
  }), /*#__PURE__*/_react.default.createElement("div", null, "Show", /*#__PURE__*/_react.default.createElement("select", {
    onChange: function onChange(e) {
      setPostsPerPage(parseInt(e.target.value));
    }
  }, /*#__PURE__*/_react.default.createElement("option", {
    value: "5"
  }, "5"), /*#__PURE__*/_react.default.createElement("option", {
    value: "10"
  }, "10"), /*#__PURE__*/_react.default.createElement("option", {
    value: "15"
  }, "15")), "entries")), /*#__PURE__*/_react.default.createElement("table", null, /*#__PURE__*/_react.default.createElement("thead", null, /*#__PURE__*/_react.default.createElement("tr", null, dataHeader.map(function (data, index) {
    return /*#__PURE__*/_react.default.createElement("th", {
      onClick: function onClick() {
        switchCategorie(data);
        sortData();
      },
      key: index
    }, data);
  }))), /*#__PURE__*/_react.default.createElement("tbody", null, currentPosts.map(function (item) {
    return Object.values(item);
  }).map(function (items, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: index
    }, items.map(function (item, index) {
      return /*#__PURE__*/_react.default.createElement("td", {
        key: index
      }, item);
    }));
  }).filter(function (item) {
    return parseInt(item.key) < postsPerPage;
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "footer-table"
  }, /*#__PURE__*/_react.default.createElement("p", null, "Showing ", indexOfFirstPost + 1, " to", " ", currentPosts.length + indexOfFirstPost, " of ", data.length, " entries"), /*#__PURE__*/_react.default.createElement(_Pagination.default, {
    postsPerPage: postsPerPage,
    totalPosts: data.length,
    paginate: paginate,
    currentPage: currentPage
  })));
};

var _default = DataTables;
exports.default = _default;